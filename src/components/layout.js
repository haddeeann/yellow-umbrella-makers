import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/layout.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header = '';
  const headerRef = useRef();
  const bodyRef = useRef();
  const cloudRef = useRef();
  let headerAni = gsap.timeline();

  useEffect(() => {
    headerAni.to(headerRef.current, {
      height: '175px',
      duration: 3,
    }, 1);

    headerAni.to(cloudRef.current, {
      opacity: 0,
      duration: 5,
    }, 1);
  })

  header = (
    <header className='page-header' data-is-root-path={isRootPath}>
      <div className='nav-section'>
        <h1>
            <Link to='/'>{title}</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blog'>TechTalk</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div ref={cloudRef} className={isRootPath ? 'clouds' : ''}></div>
    </header>
  )
  return (
    <div className='layout'>
      <div ref={headerRef} className={isRootPath ? 'home-header-wrapper' : 'header-wrapper'}>{header}</div>
      <div ref={bodyRef} className={isRootPath ? 'home-body-wrapper' : 'body-wrapper'} data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          <div>© {new Date().getFullYear()} Made with <FontAwesomeIcon icon={faHeart} /> by Yummy Apps. </div>
          <div>Thanks to <a href='https://www.gatsbyjs.com' target='_blank' rel='noreferrer'>Gatsby</a> for the template!!</div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
