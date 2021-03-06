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

Hello
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