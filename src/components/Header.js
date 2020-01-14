import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import logo from '../assets/images/logo.png'

const Header = (props) =>{
    return (
    <>
    <header id="preHeader">
        <div className="contact-method address">
              <span className="icon alt fa-home"></span>
              <h3>Address:&nbsp;</h3>
              <span>
                270 Sherman Ave N, Hamilton, ON L8L 6 N4 Suite #301
              </span>
            </div>
        <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email:&nbsp;</h3>
              <a href="mailto:violaris@kvrealestate.ca">violaris@kvrealestate.ca</a>
            </div>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone:&nbsp;</h3>
              <span><a href="tel:(905) 906-4131">(905) 906-4131</a></span>
            </div>
    </header>
    <header id="header" className="alt">
        <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }}>

        </div>
            <img url={logo} />
        <nav className="jump-menu">
            <ul>
                <li><a href="#whoWeAre">Ethos</a></li>
                <li><a href="#whatWeDo">What we do</a></li>
                <li><a href="#affiliates">Testimonials</a></li>
                <li><Link to="/contact">Get In Touch</Link></li>
            </ul>
        </nav>
    </header>
    </>
)
}
Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
