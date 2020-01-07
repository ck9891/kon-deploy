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
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            ></Helmet>

            <Banner />

            <div id="main">
              <section id="two">
                <div className="inner" id="whoWeAre">
                  
                  <section className="who-we-are-body">
                   
                  <div>
                     <header className="major">
                    <h2>Our Ethos</h2>
                  </header>
                    <p>
                      Dedicated to establishing partnerships with individuals
                      and organizations whose primary purpose is to enhance the
                      communities they do business in. Particularly interested
                      in researching and analyzing real estate markets to
                      identify meaningful opportunities at an early stage or
                      that may have been overlooked previously.
                    </p>
                    </div>
                    <div className="person-card">
                      <Img fluid={data.imageOne.childImageSharp.fluid} />
                      <p>Konstantinos Violaris</p>
                    </div>
                  </section>
                </div>
              </section>
              <section
                id="one"
                className="tiles services-container"
                style={{ backgroundImage: `url(${servicesPic})` }}
              >
                <article className="services" id="whatWeDo">
                  <header className="major">
                    <h3>What We Do</h3>
                    <p className="capitalize">
                      BORN AND RAISED IN HAMILTON, WE ARE EXPERTS IN THE LOCAL
                      REAL ESTATE MARKET AND DEEPLY ROOTED IN THE COMMUNITY. OUR
                      MISSION IS TO NOT ONLY FIND YOU THE RIGHT PROPERTY, BUT
                      PLACE YOU IN THE PERFECT COMMUNITY.
                    </p>
                    <p>
                      <ul className="services-list">
                        <li>
                          <h4>Landlord and Tenant Representation</h4>
                          {<FontAwesomeIcon icon={faUserFriends} size="3x" />}
                          <p>
                            We will represent both landlords and tenants with
                            commercial property needs.
                          </p>
                        </li>
                        <li>
                          <h4>Investment Sales</h4>
                          {<FontAwesomeIcon icon={faCoins} size="3x" />}
                          <p>
                            Help with selling your income producing real estate.
                          </p>
                        </li>
                        <li>
                          <h4>Land Acquisitions</h4>
                          {<FontAwesomeIcon icon={faFileSignature} size="3x" />}
                          <p>
                            Planning and execution of land acquisitions and
                            dispositions of development land.
                          </p>
                        </li>
                        <li>
                          <h4>Sale of Business</h4>
                          {<FontAwesomeIcon icon={faMoneyBill} size="3x" />}
                          <p>
                            Assistance with all aspects selling your business.
                          </p>
                        </li>
                      </ul>
                    </p>
                  </header>
                </article>
              </section>

              <section id="affiliates">
                <h3>Testimonials</h3>
                <div className="affiliates-row">
                {
                  affiliates.map((k, v)=> <Affiliate imgUrl={k} />)
                }
                </div>
                {/* <Testimonial 
                person = "John Doe"
                text = "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum" 
                /> */}
              </section>
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
           logo4:file(relativePath: { eq: "mainLogo.png" }) {
             ...fluidImage
           },
           logo5:file(relativePath: { eq: "RAHB-logo_hztrans_video.png" }) {
             ...fluidImage
           }

         }
       `