import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const titleRef = useRef()
  const logoRef = useRef()

  useEffect(() => {
    gsap.from(titleRef.current, {
      color: 'rgba(178, 205, 255, 1)',
      opacity: 0,
      duration: 5
    })

    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 5
    })
  })

  return (
    <div>
      <div className='header'>
        <header className="global-header">
          <span ref={logoRef}>
            <StaticImage 
              alt="Yellow Umbrella Makers Logo"
              src="../images/umbrellaLogoSMALL.png"
            />
          </span>
          <div className='heading'>
            <h1 className="main-heading">
              <Link to="/" ref={titleRef}>{title}</Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          <div>© {new Date().getFullYear()} Made with <FontAwesomeIcon icon={faHeart} /> by Yummy Apps</div>
          <div>Thanks to <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> for the template!!</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
