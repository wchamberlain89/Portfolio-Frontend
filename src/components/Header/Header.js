import { Link } from "gatsby"
import { Image } from 'gatsby-image'
import PropTypes from "prop-types"
import PageContainer from '../PageContainer'
import React from "react"

const mainNavigationLinks = [
  {
    title: 'blog',
    path: '/'
  },
  {
    title: 'portfolio',
    path: '/portfolio'
  },
  {
    title: 'about',
    path: '/about'
  },
  {
    title: 'contact',
    path: '/contact'
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <div className='pt-16 mb-6'>
      <div className='bg-gray-900 text-gray-100'>
        <PageContainer>
          <div className='flex justify-between items-center py-4'>
            <Link to='/'>
              <h1 className='mb-0 font-accent'>Ward Chamberlain</h1>
            </Link>
            <div className='relative'>
              <div className='h-32 w-32 border-yellow-200 border-4 rounded-full bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            </div>
            <div className='header-links flex items-center'>
              {mainNavigationLinks.map((link) => (
                <Link className='uppercase text-sm pr-5 last:pr-0' to={link.path}>{link.title}</Link>
                ))}
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header