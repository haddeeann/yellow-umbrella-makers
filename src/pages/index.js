import * as React from "react"
import { graphql } from "gatsby"
import '../style/app.css'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSun, faBell, faSnowflake, faAirFreshener, faAtom, faCode } from '@fortawesome/free-solid-svg-icons'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home Page" />
      {/* section on what we do in topic */}
      <div className='section'>
        <h3>What We Do</h3>
        <h4>Design Concepts for apps, websites, and new technologies.</h4> 
        <h4>Step through the process of development with various products. Coding. Testing. And finally, launch.</h4>
        <h4>Complete data analysis for helping businesses determine their best solutions and paths.</h4>
      </div>
      {/* section about what we do in categories */}
      <div className='section-card'>
        <div>
          <h3>Game Development</h3>
          <FontAwesomeIcon icon={faCoffee} size='5x' />
          <h4>Play is important</h4>
        </div>
        <div>
          <h3>Developing Apps</h3>
          <FontAwesomeIcon icon={faAtom} size='5x' />
          <h4>Making things that are useful</h4>
        </div>
        <div>
          <h3>Data Research</h3>
          <FontAwesomeIcon icon={faCode} size='5x' />
          <h4>Data that drives good decisions</h4>
        </div>
      </div>
      {/* section about our development process */}
      <div className='section'>
        <div>
          <h3>Research</h3>
          <FontAwesomeIcon icon={faAirFreshener} size='5x' />
          <p>A great product involves research and problem solving.</p>
        </div>
        <div>
          <h3>Design</h3>
          <FontAwesomeIcon icon={faBell} size='5x' />
          <p>Making things that people WANT to use begins with good design.</p>
        </div>
        <div>
          <h3>Develop</h3>
          <FontAwesomeIcon icon={faSun} size='5x' />
          <p>A great product is made as simply as possible with room for growth.</p>
        </div>
        <div>
          <h3>Market</h3>
          <FontAwesomeIcon icon={faSnowflake} size='5x' />
          <p>For a product to be useful people have to know about it.</p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
