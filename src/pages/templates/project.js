import React from 'react'
import { graphql } from 'gatsby'
import PortableText from '../../components/PortableText'

export const projectQuery = graphql`
    query($slug: String) {
        sanityProject(slug: { current: { eq: $slug }}) {
            title
            _rawBody
        }
    }
`

const ProjectTemplate = ({ data }) => {
    return (
        <>
            <h1>{data.sanityProject.title}</h1>
            <div className='max-w-4xl mx-auto mt-20'>
                <PortableText
                    blocks={data.sanityProject._rawBody}
                />
            </div>
            
        </>
    )
}

export default ProjectTemplate