import React from "react"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import PortableText from "../components/PortableText"

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_QUERY {
    content: sanityAboutPage(_id: {eq: "aboutPage"}) {
      _rawBody
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const AboutPage = ({ data: { content } }) => {
  console.log(content)
  return (
    <Layout>
      <SEO title="Home" />
      <div className='about-page__container'>
        <div className='w-60 max-w-2/5 float-right border-4 ml-10 overflow-hidden'>
          <Image className='w-full' fluid={content.mainImage.asset.fluid} />
        </div>
        <PortableText blocks={content._rawBody} />
      </div>
    </Layout>
  )
}

export default AboutPage