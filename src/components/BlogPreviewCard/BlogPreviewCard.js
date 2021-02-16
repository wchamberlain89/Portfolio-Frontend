import React from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import Card from '../Card'

const BlogPreviewCard = ({ title, subtitle, image, body}) => {
    return (
        <Card>
            <div className='flex flex-col lg:flex-row'>
                <div className='card__image-container relative w-full  h-60 lg:w-1/3 mr-10'>
                    { image && <Image fluid={image} className='h-full object-cover'/> }
                </div>
                <div className='card__text my-5'>
                    { title && <h3 className='card__title text-3xl'>{title}</h3> }
                    { subtitle && <h5 className='card__subtitle'>{subtitle}</h5> }
                    { body && <p>{body}</p> }
                </div>
            </div>
        </Card>
    )
}

BlogPreviewCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string
}

export default BlogPreviewCard
