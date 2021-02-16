import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => {
    return (
        <div className='page-container max-w-5xl mx-auto px-5 xl:px-0'>
            {children}
        </div>
    )
}

PageContainer.propTypes = {

}

export default PageContainer