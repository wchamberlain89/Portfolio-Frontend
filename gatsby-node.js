/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
      {
        projects: allSanityProject {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
        posts: allSanityPost {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `);

    const projects = result.data.projects.edges.map(({ node }) => node);
    const posts = result.data.posts.edges.map(({ node }) => node);
  
    projects.forEach(project => {
      actions.createPage({
        path: `/projects/${project.slug.current}`,
        component: path.resolve('./src/pages/templates/project.js'),
        context: {
          slug: project.slug.current
        }
      });
    });
    posts.forEach(post => {
      actions.createPage({
        path: `/posts/${post.slug.current}`,
        component: path.resolve('./src/pages/templates/post.js'),
        context: {
          slug: post.slug.current
        }
      });
    });
  };