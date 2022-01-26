/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../style/bio.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <a href='https://hellonurse.io/' target='_blank' rel='noreferrer'>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpeg"
          width={300}
          height={300}
          quality={95}
          alt="Patricia Profile Pic"
        />
        {author?.name && (
          <div>
            <h4><strong>{author.name}</strong></h4>
            <p>
              Founder and general trouble maker. One who insists against all odds to be, of all things. <strong>Interesting</strong>.
              {` `}
            </p>
          </div>
        )}
      </a>
    </div>
  )
}

export default Bio
