import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

import instructorStyles from '../pages/instructor.module.css'
import ClassPreview from '../components/class-preview'


import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import moment from 'moment'
const SOME_TIMESTAMP  =  moment().format('X');
const SOME_TIMESTAMP2  =  moment().format("DD-MM-YYYY hh:mm:ss");


class BlogPostTemplate extends React.Component {
  render() {
//    const post = get(this.props, 'data.contentfulBlogPost')
const post = get(this.props, 'data.contentfulInstructor')
const danceClasses = get(this, 'props.data.allContentfulClass.edges')

const siteTitle = get(this.props, 'data.site.siteMetadata.title')




    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.name} | ${siteTitle}`} />

<Container fluid className={instructorStyles.removePads} >
          <Row noGutters >
      <Col sm={6}>   <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.name}
              fluid={post.heroImage.fluid}
            />
          </div></Col>




       



          <Col sm={6}> <div className="wrapper">





          <div className={instructorStyles.teacher}>


<div className={instructorStyles.teacherDetails}>
  



<ul className={instructorStyles.containerSpaced}>
<li className="flex-item"><div className={instructorStyles.teacherName}>{post.name}
</div></li>
<li className="flex-item">
<a href={post.instagram}>
Insta 

</a>


</li>
</ul>



<p
              style={{
                display: 'block',
              }}
            >
              {post.bio.bio}
            </p>



</div>
</div>

<h4 className="classes-headline">Book your class</h4>

<ListGroup>

              {danceClasses.map(({ node }) => {
                return (
                 
                    <ClassPreview danceClass={node} />
              
                )
              })}
               </ListGroup>




            
          
          </div>
        </Col>
  </Row>
</Container>
</div>
         
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  
query 
  
BlogPostBySlug2(
  $slug: String!,
  $today: Int!
  ) {
  
site {
    siteMetadata {
      title
    }
  }
  

  contentfulInstructor (webUrl: { eq: $slug })
   {
      
          name
          bio {
            bio
          }
          instagram
         
         
          heroImage: visual {
            fluid(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
      }




      
      
      
     



          allContentfulClass(

              

              sort: {
                  fields: [date], order: ASC
              }, 
              
              
              filter: {
                  fields: {timestamp: { gt: $today }},  teacher: {webUrl: {eq: $slug}} 
              }
              
              
              ) {
              edges {
            node {
              name
              price
              duration
              type
              date(formatString:"DD")
              fields {timestamp}
              
              month: date(formatString: "MMM")
              time: date(formatString: "h:mm A")
              
             
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }








}
`

