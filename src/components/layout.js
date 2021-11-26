import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  }

  return (
    <div>
      <div className='header'>
        <header className="global-header">
          <StaticImage 
            alt="Yellow Umbrella Makers Logo"
            src="../images/umbrellaLogoSMALL.png"
          />
          {header}
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
