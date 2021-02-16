import React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ body, classNames }) => {
    return (
        <div className={`text-block-container pb-20 max-w-3xl mx-auto`}>
            { body && <p className='text-block-body font-accent text-4xl mb-0'>{body}</p> } 
        </div>
    )
}

TextBlock.propTypes = {
    body: PropTypes.string
}

export default TextBlock