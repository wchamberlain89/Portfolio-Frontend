import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TextBlock body={'Hey, Thanks for looking to get in touch, I look forward to hearing from you ~'}/>
  </Layout>
)

export default AboutPage