import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Affiliate from '../components/Affiliate'
// library.add(faEnvelope, faKey);


import Layout from '../components/layout'
import Banner from '../components/Banner'

import servicesPic from '../assets/images/services.jpg'

import Testimonial from '../components/Testimonial';

const HomeIndex = ({data}) => {
        const affiliates = [
          data.crea.childImageSharp.fluid,
          data.orea.childImageSharp.fluid,
          data.rahb.childImageSharp.fluid,
          data.reco.childImageSharp.fluid,
        ]
        return (
          <Layout>
            <Helmet
              title="KV Realty"
              meta={[
                { name: 'description', content: 'We are experts in the local real estate market and deeply rooted in the community' },
                { name: 'keywords', content: 'Real Estate, Home Buying, Selling' },
              ]}
            ></Helmet>

            <Banner />

            <div id="main">
              <section id="two">
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
              </section>
              <section
                id="one"
                className="tiles services-container services"
                
              >
                <div className="col__1" id="whatWeDo" style={{ backgroundImage: `url(${servicesPic})` }}>
                  <h3>Services</h3>
                  <p className="capitalize">
                      Born and raised in Hamilton, we are experts in the local real estate market and deeply rooted in the community. Our mission is to not only find you the right property, but place you in the perfect community. 
    
                    </p>
                </div>

                <article className="major col__2">
                    
                    {/* <p className="capitalize">
                      {/* Dedicated to establishing partnerships with individuals
                      and organizations whose primary purpose is to enhance the
                      communities they do business in. Particularly interested
                      in researching and analyzing real estate markets to
                      identify meaningful opportunities at an early stage or
                      that may have been overlooked previously. 
                    
                    </p> 
                    */}
                    {/* <p className="capitalize">
                      Born and raised in Hamilton, I am an expert in the local real estate market and deeply 
                      rooted in the community. My mission is to not only find you the right property, but place you
                      in the perfect community. My expertise in the culture of the area allows me to understand you
                      as a tenant or landlord and make sure you are properly <span>represented</span>. In such a busy market
                      I want to make sure your income properties get you the value you deserve and that you can continue acquiring
                      <span> more investments </span>, pain free. If you are looking to <span>sell your business</span> , I will make sure the
                      right buyer takes on your business so that you can enjoy your next adventure worry free.
                    </p>  */}

                      <ol className="services-list">
                        <li>
                          <h4>Home Seller Representation</h4>
                          <p>
                            A structured listing approach that ensures home sellers are comfortable and confident throughout the entire process.
                          </p>
                        </li>
                        <li>
                          <h4>Home Buyer Representation</h4>
                          <p>
                            Arming Our Buyers With:
                          </p>
                          <ul>
                            <li>Market Research</li>
                            <li>Neighbourhood Information</li>
                            <li>Negotiation Strategy</li>
                          </ul>
                        </li>
                        <li>
                          <h4>Commercial Real Estate</h4>
                          <ul>
                            <li>Landlord/Tenant Representation</li>
                            <li>Developmemnt Land Aquisitions/Dispositions</li>
                            <li>Investment Sales</li>
                          </ul>
                        </li>
                        <li>
                          <h4>Multi-Family Investments</h4>
                          <p>
                            Constant building our database of off-market opportunities.
                          </p>
                        </li>
                      </ol>
                  </article>
              </section>

              <section id="affiliates">
                <h3>Affiliates</h3>
                <div className="affiliates-row">
                   {/* <Testimonial
                   person = "MRKT Collective"
                   text = "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum"
                   /> */}
                {
                  affiliates.map((k, v)=> <Affiliate imgUrl={k} />)
                }
                
                </div>
               
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