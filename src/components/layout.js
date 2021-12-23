import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../style/layout.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = ''

  if (isRootPath) {
    header = (
      <header className='clouds' data-is-root-path={isRootPath}>
        <h1>
            <Link to="/">{title}</Link>
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
      </header>
    )
  } else {
    header = (
      <header className='short-header' data-is-root-path={isRootPath}>
        <h1>
            <Link to="/">{title}</Link>
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
      </header>
    )
  }
  return (
    <div>
      <div>{header}</div>
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
