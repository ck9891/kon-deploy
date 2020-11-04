import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query rlp {
           file(relativePath: { eq: "rlp-logo.jpg" }) {
             ...fluidImage2
           }
           
         }
  `)
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 0px',
    });
  return (
    <>
    <motion.footer id="footer"
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -150
      }}
       transition={{
       
        default: { duration: 1 },
      }}
    >
      <section id="contact">
        <div className="inner">
          <section>
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="https://www.instagram.com/kvgrouphamilton/" target="_blank" rel="noopener noreferrer" className="icon alt fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/konstantinos-violaris/" target="_blank" rel="noopener noreferrer" className="icon alt fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                270 Sherman Ave N Suite #301<br />
                Hamilton, ON<br />
                L8L 6N4 <br />
              </span>
            </div>

            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:violaris@kvrealestate.ca">violaris@kvrealestate.ca</a>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span><a href="tel:(905) 906-4131">(905) 906-4131</a></span>
            </div>
            
          </section>
          
        </div>
        
      </section>
      
    </motion.footer>
    <footer id="subFooter">
      <Img fluid={data.file.childImageSharp.fluid} alt="Royal Lepage" />
    </footer>
  </>
  )


}
export default Footer

export const fluidImage2 = graphql`
  fragment fluidImage2 on File {
    childImageSharp {
      fluid(maxWidth: 300, grayscale: true) {
        ...GatsbyImageSharpFluid
        src
      }
    }
  }
`;

