import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/"
import TextBlock from "../components/TextBlock"
import ContactForm from "../components/ContactForm"


const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TextBlock body={'Hey, Thanks for looking to get in touch, I look forward to hearing from you ~'}/>
    <ContactForm />
  </Layout>
)


export default ContactPage