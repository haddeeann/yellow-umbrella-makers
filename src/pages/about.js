import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="About" />
        <div className='section-card'>
            <h2>Why Does Yummy Apps Exist?</h2>
            <p>Our goal is to create useful things and give people a space to create.</p>
            <h2>How Does Yummy Apps Operate?</h2>
            <p>Every product exists for one of two reasons: one of us went to look for it and couldn't find it or we thought it would be fun to make. Many of the things we create start with an idea.. 'You know what would be useful?'. Once we go to look for it if we can't find it and it seems like fun to make.. boom! There we go.</p>
            <h2>Our Philosphy</h2>
            <p>Start where you are, use what you have and do what you can.</p>
            <p>We believe that great things can start small as long as the people who make them work hard. It's more important to make something and get feedback than to sit in idea land and THINK about what people need. The trick is to improve continuously and grow organically. With that in mind we respect that sometimes projects, goals, and ideas change. That gives us the ability to remain agile and to adapt.</p>
        </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

