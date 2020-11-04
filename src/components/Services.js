import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


function Services({servicesPic}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <section
                id="one"
                className="tiles services-container services"
                
              >
                <motion.div className="col__1" id="whatWeDo" style={{ backgroundImage: `url(${servicesPic})` }} ref={ref}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : -150
                  }}
                   transition={{
                   
                    default: { duration: 1 },
                  }}
                >
                  <h3>Services</h3>
                  <p className="capitalize">
                      Born and raised in Hamilton, we are experts in the local real estate market and deeply rooted in the community. Our mission is to not only find you the right property, but place you in the perfect community. 
    
                    </p>
                </motion.div>

                <article className="major col__2">
                    

                      <motion.ol ref={ref} animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? 0 : -150
                      }}
                       transition={{
                       
                        default: { duration: 1 },
                      }}
                      className="services-list"

                      >
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
                      </motion.ol>
                  </article>
              </section>
  )
}

export default Services
