import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faUserFriends,
  faCoins,
  faFileSignature,
  faMoneyBill
} from '@fortawesome/free-solid-svg-icons'
// library.add(faEnvelope, faKey);


import Layout from '../components/layout'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

import servicesPic from '../assets/images/services.jpg'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

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
                  <header className="major">
                    <h2>Who We Are</h2>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                    pharetra. Pellentesque condimentum sem. In efficitur ligula
                    tate urna. Maecenas laoreet massa vel lacinia pellentesque
                    lorem ipsum dolor. Nullam et orci eu lorem consequat
                    tincidunt. Vivamus et sagittis libero. Mauris aliquet magna
                    magna sed nunc rhoncus amet pharetra et feugiat tempus.
                  </p>

                </div>
              </section>
              <section id="one" className="tiles services-container" style={{ backgroundImage: `url(${servicesPic})` }}>
                
                <article className="services" id="whatWeDo">
                  <header className="major">
                    <h3>Services</h3>
                    <p className="capitalize">BORN AND RAISED IN HAMILTON, WE ARE EXPERTS IN THE LOCAL REAL ESTATE MARKET AND DEEPLY ROOTED IN THE COMMUNITY. OUR MISSION IS TO NOT ONLY FIND YOU THE RIGHT PROPERTY, BUT PLACE YOU IN THE PERFECT COMMUNITY.</p>
                    <p><ul className="services-list">
                    <li>
                        <h4>Landlord and Tenant Representation</h4>
                        {<FontAwesomeIcon icon={faUserFriends} size="3x" />}
                        <p>We will represent both landlords and tenants with commercial property needs.</p>
                    </li>
                    <li>
                        <h4>Investment Sales</h4>
                        {<FontAwesomeIcon icon={faCoins} size="3x" />}
                        <p>Help with selling your income producing real estate.</p>
                    </li>
                    <li>
                        <h4>Land Acquisitions</h4>
                        {<FontAwesomeIcon icon={faFileSignature} size="3x" />}
                        <p>Planning and execution of land acquisitions and dispositions of development land.</p>
                    </li>
                    <li>
                        <h4>Sale of Business</h4>
                        {<FontAwesomeIcon icon={faMoneyBill} size="3x" />}
                        <p>Assistance with all aspects selling your business.</p>
                    </li>
                  </ul></p>
                  </header>
                </article>
                
              </section>
              
              <section id="testimonials">
                <h3>Affiliations</h3>
                <Testimonial 
                person = "John Doe"
                text = "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum" 
                />
              </section>
            </div>
          </Layout>
        )
    }
}

export default HomeIndex