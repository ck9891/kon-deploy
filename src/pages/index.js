import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Layout from '../components/layout'
import Banner from '../components/Banner'

import servicesPic from '../assets/images/services.jpg'

import Services from '../components/Services'
import Affilliates from '../components/Affilliates'

const HomeIndex = ({data, location}) => {
        const affiliates = [
          data.crea.childImageSharp.fluid,
          data.orea.childImageSharp.fluid,
          data.rahb.childImageSharp.fluid,
          data.reco.childImageSharp.fluid,
        ];
        const [ref, inView] = useInView({
          triggerOnce: true,
          rootMargin: '-100px 0px',
        });
        return (
          <Layout location={location}>
            <Helmet
              title="KV Realty"
              meta={[
                { name: 'description', content: 'We are experts in the local real estate market and deeply rooted in the community' },
                { name: 'keywords', content: 'Real Estate, Home Buying, Selling' },
              ]}
            ></Helmet>

            <Banner />

            <div id="main">
              <motion.section id="two"
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : -150
                }}
                 transition={{
                 
                  default: { duration: 1 },
                }}
                ref={ref}
              >
                <div className="inner" id="whoWeAre">
                  
                  <section className="who-we-are-body">
                   
                  <div>
                    <header className="major">
                      <h2>Our Approach</h2>
                    </header>
                    <p>We are passionate Hamilton Realtors &reg; who take pride in our city and everything it has to offer.
                      With so much happening we understand the Hamilton real estate market is constantly evolving and we are devoted to
                      providing you with all of the information and resources you need to make the right decision. 
                      Authenticity and Integrity are teh foundation of everything we do and you should expect
                      nothing but the highest level of service when working with us.
                    </p>
                    </div>
                    <div className="person-card">
                      <Img fluid={data.imageOne.childImageSharp.fluid} alt="Konstantinos Violaris" />
                      <p>Konstantinos Violaris</p>
                    </div>
                  </section>
                </div>
              </motion.section>
              <Services servicesPic={servicesPic} />

              <Affilliates affiliates={affiliates} />
            </div>
          </Layout>
        )
    
}

export default HomeIndex

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
        src
      }
    }
  }
`;

export const HEADSHOT_QUERY = graphql`
         query {
           imageOne: file(relativePath: { eq: "kv-headshot.jpg" }) {
             ...fluidImage
           },
           crea: file(relativePath: { eq: "crea logo.png" }) {
             ...fluidImage
           },
           orea: file(relativePath: { eq: "orea logo.png" }) {
             ...fluidImage
           },
           rahb: file(relativePath: { eq: "rahb logo1.png" }) {
             ...fluidImage
           },
           reco: file(relativePath: { eq: "reco logo.png" }) {
             ...fluidImage
           },
         }
       `