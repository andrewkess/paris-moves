import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import InstructorPreview from '../components/instructor-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulInstructor.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')




    function format(amount, currency) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format((amount / 100).toFixed(2));
    }

    async function handleSubmit(event) {
      event.preventDefault();
      const form = new FormData(event.target);

      const data = {
        sku: form.get('sku'),
        quantity: Number(form.get('quantity')),
      };

      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      const stripe = Stripe(response.publishableKey);
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.sessionId,
      });

      if (error) {
        console.error(error);
      }
    }

    async function loadProducts() {
      if (!'content' in document.createElement('template')) {
        console.error('Your browser doesn’t support HTML template elements.');
        return;
      }

      const data = await fetch('/.netlify/functions/get-products')
        .then((res) => res.json())
        .catch((err) => console.error(err));

      const products = document.querySelector('.products');
      const template = document.querySelector('#product');

      data.forEach((product) => {
        const container = template.content.cloneNode(true);

        container.querySelector('h2').innerText = product.name;
        container.querySelector('.description').innerText =
          product.description;
        container.querySelector('.price').innerText = format(
          product.amount,
          product.currency
        );
        container.querySelector('[name=sku]').value = product.sku;

        const img = container.querySelector('img');
        img.src = product.image;
        img.alt = product.name;

        const form = container.querySelector('form');
        form.addEventListener('submit', handleSubmit);

        products.appendChild(container);
      });
    }

    loadProducts();

    




    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Your dance instructors</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.webUrl}>
                    <InstructorPreview instructor={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <template id="product">
      <div className="product">
        <img src="" alt="" />
        <h2>name</h2>
        <p className="description">description</p>
        <p className="price">price</p>
        <form action="/.netlify/functions/create-checkout" method="post">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value="1"
            min="1"
            max="10"
          />
          <input type="hidden" name="sku" value="" />
          <button type="submit">Buy Now</button>
        </form>
      </div>
    </template>



      </Layout>
    )
  }
}

export default RootIndex


export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
   


    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: SCALE
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }

    allContentfulInstructor
    {
      edges {
        node {
          name
          bio {
            bio
          }
          instagram
         webUrl
         
          heroImage: visual {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: FILL
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        
        
        
        
        }
      }
    }






  }
`