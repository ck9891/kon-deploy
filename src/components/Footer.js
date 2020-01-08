import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Footer = () => {
    
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
            </div>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                987 Rymal Road East<br />
                Hamilton, Ontario, Canada<br />
                L8W 3M2
              </span>
            </div>

            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:kviolaris@royallepage.ca">kviolaris@royallepage.ca</a>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span><a href="tel:(905) 906-4131">(905) 906-4131</a></span>
            </div>
            <ul className="copyright">
              <li>&copy; Cameron Farquharson</li>
            </ul>
          </section>
        </div>
      </section>
    </footer>
  )


}
export default Footer
