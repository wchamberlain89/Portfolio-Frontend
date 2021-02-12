import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"
import Card from '../components/Card'
import BlogPreviewCard from "../components/BlogPreviewCard"

export const query = graphql` 
  query QUERY_ALL_POSTS {
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
    <TextBlock body={'Portfolio is under construction XXXXX'}/>
    <ul className='flex flex-wrap'>
      
    </ul>
  </Layout>
)

export default IndexPage