const Promise = require('bluebird')
const path = require('path')

//import moment from 'moment'
const moment = require('moment');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const instructorPost = path.resolve('./src/templates/instructor-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulInstructor {
              edges {
                node {
                  name
                  webUrl
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulInstructor.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/instructors/${post.node.webUrl}/`,
            component: instructorPost,
            context: {
              slug: post.node.webUrl,
              //creates a timestamp of today to check against the timestamp of the class date
              today: parseInt((moment().format('X')))
            },
          })
        })
      })
    )
  })
}


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // I'm guessing your type is ContentfulClass
  if (node.internal.type === `ContentfulClass`) {
    const date = node.date;

    createNodeField({
      name: 'timestamp',
      node,
      // convert date to unix timestamp & convert to number
      value: +moment(date).format('X'),
    })


  }
}