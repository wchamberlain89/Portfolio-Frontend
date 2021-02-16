import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"
import BlogPreviewCard from "../components/BlogPreviewCard"

export const query = graphql` 
  query MyQuery {
    allSanityPost {
      edges {
        node {
          _rawBody
          title
          slug {
            current
          }
          publishedAt
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          shortDescription
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TextBlock body={'Hey there, I write about my adventures through the digital world!'}/>
    <ul>
      {data.allSanityPost.edges.map(({ node }) => (
        <Link className='block' to={`/posts/${node.slug.current}`}>
          <BlogPreviewCard  
            image={node.mainImage.asset.fluid} 
            title={node.title} 
            subtitle={node.publishedAt} 
            body={node.shortDescription} />
        </Link>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
