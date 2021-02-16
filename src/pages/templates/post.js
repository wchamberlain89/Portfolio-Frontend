import React from 'react'
import { graphql } from 'gatsby'
import PortableText from '../../components/PortableText'
import Layout from '../../components/Layout'
import { gsap } from 'gsap'

export const blogPostQuery = graphql`
    query($slug: String) {
        sanityPost(slug: { current: { eq: $slug }}) {
            title
            _rawBody
        }
    }
`

const BlogTemplate = ({ data }) => {
    React.useEffect(() => {
        gsap.fromTo('.page-wrapper', { opacity: 0 },{ opacity: 1, duration: .1})
    }, [])
    return (
        <Layout>
            <div className='page-wrapper' style={{ opacity: 0 }}>
                <h1 className='mt-20'>{data.sanityPost.title}</h1>
                <div className='max-w-4xl mx-auto mt-20'>
                    <PortableText
                        blocks={data.sanityPost._rawBody}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate