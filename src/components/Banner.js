import { Link } from 'gatsby'
import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>KV Real Estate</h1>
            </header>
            <div className="content">
                <p>Your Credible Source For Commercial Real Estate In Hamilton.</p>
                
                <ul className="actions">
                    
                    <li><Link to="/contact" className="button scrolly">Get in Touch</Link></li>
                </ul>
                
            </div>
        </div>
    </section>
)

export default Banner
