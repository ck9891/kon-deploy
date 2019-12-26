import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

const Footer = ({data}) => {
console.log(data)
  return (
    <footer id="footer">
      <section id="contact">
        <div className="inner">
          <section>
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="#" className="icon alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon alt fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>&copy; Cameron Farquharson</li>
              </ul>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                1234 Somewhere Road #5432
                <br />
                Hamilton, ON Canada
                <br />
                A8C1B4
              </span>
            </div>

            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">email@email.com</a>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
        </div>
        {/* <Img fluid={data.childImageSharp.fluid} /> */}
      </section>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </footer>
  )


}
export default Footer

export const LEPAGE_QUERY = graphql`
         query MyQuery {
           file(relativePath: { eq: "kv-headshot.jpg" }) {
             childImageSharp {
               fluid {
                 src
               }
             }
           }
         }
       `