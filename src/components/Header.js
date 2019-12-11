import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import logo from '../assets/images/logo.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
            {logo}
        </Link>
        <nav className="jump-menu">
            <ul>
                <li><a href="#whoWeAre">Who we are</a></li>
                <li><a href="#whatWeDo">What we do</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Get In Touch</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
