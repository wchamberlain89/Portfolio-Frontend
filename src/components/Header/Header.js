import { Link, useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
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

const Header = () => {
  const data = useStaticQuery(graphql`
    query HEADER_QUERY {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
    <header className='header__outer-container mb-14 md:mb-16 lg:mb-20 relative'>
      <div className='header__outer-wrapper lg:pt-16 mb-6'>
        <div className='header__inner-container bg-gray-900 text-gray-100'>
          <PageContainer>
            <div className='header__inner wrapper flex justify-between items-center py-4 relative'>
              <Link to='/'>
                <h1 className='relative text-2xl md:text-3xl lg:text-4xl mb-0 font-accent z-50'>Ward Chamberlain</h1>
              </Link>
              
              <div className='header__image hidden lg:block h-32 w-32 border-secondary border-4 rounded-full bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                <Image className='relative rounded-full object-center w-40 h-40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' fluid={data.image.childImageSharp.fluid}/>
              </div>
              
              <div className='header__navbar-links hidden lg:flex items-center '>
                {mainNavigationLinks.map((link) => (
                  <Link className='uppercase text-sm pr-5 last:pr-0' key={link.title} to={link.path}>{link.title}</Link>
                  ))}
              </div>
              <Hamburger />
            </div>
          </PageContainer>

        </div>
      </div>
    </header>
    </>
  )
}

const Hamburger = ( onClick ) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = ( prevOpenState ) => {
    setIsOpen(!prevOpenState)
  }

  return (
    <>
      <div className='flex flex-col h-6 justify-between lg:hidden z-50' onClick={() => toggleOpen(isOpen)}>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
      </div>
      <div className={`nav-drawer__container pt-40 fixed w-full h-full z-40 top-0 transition-all ${isOpen ? 'right-0' :'-right-full'} bg-gray-900 lg:hidden`}>
        <ul className={`nav-drawer-items__container flex flex-col items-center`}>
          {
            mainNavigationLinks.map((link) => (
              <li>
                <Link className='uppercase text-sm' key={link.title} to={link.path}>{link.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header