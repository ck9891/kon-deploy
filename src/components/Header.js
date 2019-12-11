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
                <li>Who we are</li>
                <li>What we do</li>
                <li>Testimonials</li>
                <li>Get In Touch</li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
