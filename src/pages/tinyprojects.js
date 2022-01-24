import React from 'react';
import { graphql } from 'gatsby';
import '../style/tinyprojects.css';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const TinyProjects = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title='tiny projects' />
            <h2>Tiny Projects Page</h2>
            <ul class='tiny-projects'>
                <li>
                    <a href='https://the-happy-cloud.netlify.app/' target='_blank' rel='noreferrer'>
                        <h3>The Happy Cloud</h3>
                        <StaticImage 
                            layout='fixed'
                            formats={['auto', 'jpeg']}
                            src='../images/happy-cloud.jpeg'
                            width={500}
                            quality={95}
                            alt='Happy Cloud Project'
                        />
                    </a>
                </li>
                <hr />
                <li>
                    <a href='https://adventure-dog.netlify.app/' target='_blank' rel='noreferrer'>
                        <h3>Adventure Dog Blog</h3>
                        <StaticImage 
                            layout='fixed'
                            formats={['auto', 'jpeg']}
                            src='../images/adventure-dog.jpeg'
                            width={500}
                            quality={95}
                            alt='Adventure Dog Project'
                        />
                    </a>
                </li>
            </ul>
        </Layout>
    );
}

export default TinyProjects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;