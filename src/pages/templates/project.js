import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import PortableText from '../../components/PortableText'
import Layout from '../../components/Layout'
import Card from 'src/components/Card'

export const projectQuery = graphql`
    query($slug: String) {
        project: sanityProject(slug: { current: { eq: $slug }}) {
            _rawBody
            title
            mainImage {
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            external_links {
                name
                path
                icon {
                    asset {
                        fixed( width: 35, height:35 ) {
                            ...GatsbySanityImageFixed
                        }
                    }
                }
            }
        }
    }
`

const ProjectTemplate = ({ data }) => {
    const { project } = data;
    const mainImage = project.mainImage.asset.fluid
    console.log(project.external_links)
    return (
        <Layout>
            <div 
            className='project-template__container 
            flex 
            items-center lg:items-start  
            flex-col lg:flex-row 
            mb-40'>
                <div className='project-template__left mb-8 lg:w-2/5 lg:mr-20 lg:sticky lg:top-36'>
                    <div className='project-template__main-image h-64'>
                        { mainImage && <Image className='w-full h-full border-4 border-gray-800' fluid={mainImage} /> }
                    </div>

                    { project.title && <h3 className='text-6xl mt-8'>{project.title}</h3> }
                    
                    { project.external_links && 
                        <div className='project-template__external-links'>
                            <ul className='flex'>
                                { 
                                    project.external_links.map(( link ) => (
                                        <li className='mr-5'>
                                            <Card className='p-2'>
                                                <Image key={link.name} fixed={link.icon.asset.fixed} />
                                            </Card>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>

                <div className='project-template__right w-5/6 lg:w-4/5'>
                    <PortableText blocks={project._rawBody}/>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectTemplate