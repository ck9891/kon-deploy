import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserFriends,
  faCoins,
  faFileSignature,
  faMoneyBill
} from '@fortawesome/free-solid-svg-icons'
// library.add(faEnvelope, faKey);


import Layout from '../components/layout'
import Banner from '../components/Banner'

import servicesPic from '../assets/images/services.jpg'
import creaLogo from '../assets/images/logo_crea.svg'
import oreaLogo from '../assets/images/logo-orea.svg'
import hdaaLogo from '../assets/images/logo-hdaa.gif'
import Affiliate from '../components/Affiliate';

const HomeIndex = ({data}) => {
        const affiliates = [
          creaLogo,
          // oreaLogo,
          hdaaLogo,
          data.logo4.childImageSharp.fluid.src,
          data.logo5.childImageSharp.fluid.src,
        ]
        return (
          <Layout>
            <Helmet
              title="KV Realty"
              meta={[
                { name: 'description', content: 'Contact' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            ></Helmet>


            <main id="contactPage">
              <section>
                <div className="inner" id="contactUs">
                    <h2>Contact Us</h2>
                    <form id="contactForm">
                        <label for="fullName">
                            Your Name
                            <input type="text" name="fullName" placeholder="John Doe" />
                        </label>
                        <label for="email">
                            Your Email
                            <input type="email" name="email" placeholder="abc@abc.com" />
                        </label>
                        <label for="message">Message
                            <textarea name="message"></textarea>
                        </label>
                        <button id="getInTouch" type="submit">Get in Touch</button>
                    </form>
                </div>
               </section>
            </main>
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
           logo4:file(relativePath: { eq: "mainLogo.png" }) {
             ...fluidImage
           },
           logo5:file(relativePath: { eq: "RAHB-logo_hztrans_video.png" }) {
             ...fluidImage
           }

         }
       `