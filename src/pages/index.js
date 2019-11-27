import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(faEnvelope, faKey);


import Layout from '../components/layout'
import Banner from '../components/Banner'

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
              title="KON - Test Site"
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            ></Helmet>

            <Banner />

            <div id="main">
              <section id="one" className="tiles">
                
                <article className="services">
                  <header className="major">
                    <h3>Services</h3>
                    <p><ul>
                    <li>{<FontAwesomeIcon icon={faCoffee} />}</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul></p>
                  </header>
                  <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic01})` }}>
                 
                  
                  <Link to="/landing" className="link primary"></Link>
                </article>
              </section>
              <section id="two">
                <div className="inner">
                  <header className="major">
                    <h2>Massa libero</h2>
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
            </div>
          </Layout>
        )
    }
}

export default HomeIndex