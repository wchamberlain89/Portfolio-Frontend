import { Link, useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import PropTypes from "prop-types"
import PageContainer from '../PageContainer'
import React from "react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

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

  React.useEffect(() => {
    gsap.to('.header__image', {
      opacity: 0,
      scrollTrigger: {
        trigger: ".header-trigger",
        start: "bottom",
        end: "+=75",
        scrub: true,
      } 
    })
    
  }, [])

  return (
    <>
    <div className='lg:pt-20 header-trigger'></div>
    <header className='header__outer-container mb-14 md:mb-16 lg:mb-20 sticky top-0 z-20'>
      <div className='header__outer-wrapper mb-6'>
        <div className='header__inner-container bg-gray-900 text-gray-100'>
          <PageContainer>
            <div className='header__inner-wrapper flex justify-between items-center py-4 relative'>
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
  
  const html = document.querySelector('body')

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 1024 && isOpen) {
        setIsOpen(false)
      }
    })
  }, [])

  React.useEffect(() => {
    isOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
    isOpen ? (html.style.height = '100vh') : (html.style.height = 'auto')
  }, [isOpen])

  return (
    <>
      <div className='flex flex-col h-6 justify-between lg:hidden z-50 ' onClick={() => setIsOpen(!isOpen)}>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
      </div>
      <div className={`nav-drawer__container 
        pt-40 
        fixed 
        w-full 
        h-full 
        z-40 
        top-0
         transition-all ${isOpen ? 'right-0' :'-right-full'} 
         bg-gray-900
         overflow-hidden 
         lg:hidden`
         }>
        <ul className={`nav-drawer-items__container flex flex-col items-center`}>
          {
            mainNavigationLinks.map((link) => (
              <li className={`nav-drawer-item flex w-full justify-center`}>
                <Link className='uppercase text-sm py-5 w-full hover:bg-gray-800 text-center' key={link.title} to={link.path}>
                  {link.title}
                </Link>
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