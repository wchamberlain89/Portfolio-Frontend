import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TextBlock from "../components/TextBlock"
import Card from '../components/Card'
import BlogPreviewCard from "../components/BlogPreviewCard"

export const query = graphql` 
  query QUERY_ALL_PROJECTS {
    posts: allSanityProject(sort: { fields: [_updatedAt], order: DESC}) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }    
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <TextBlock body={'Thank you for checking out my projects'} />
    <ul>
      {data.posts.edges.map(({ node }) => (
        <Link className='block mb-16' to={`/projects/${node.slug.current}`}>
          <BlogPreviewCard
            key={node.slug.current}  
            image={node.mainImage.asset.fluid} 
            title={node.title} 
          />
        </Link>
      ))}
    </ul>
  </Layout>
)

export default ProjectsPage