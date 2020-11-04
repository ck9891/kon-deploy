import React from 'react'
import Affiliate from './Affiliate'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Affilliates({affiliates}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <motion.section id="affiliates"
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 150
      }}
      transition={{
      
        default: { duration: 1 },
      }}
      ref={ref}
    >
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
               
              </motion.section>
  )
}

export default Affilliates
