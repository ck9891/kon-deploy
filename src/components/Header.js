import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import logo from '../assets/images/logo.png'

const Header = (props) =>{
    console.log(props)
    return (
    
    <header id="header" className="alt">
        <div className="logo-bg" style={{ backgroundImage: `url(${logo})` }}>

        </div>
            <img url={logo} />
        <nav className="jump-menu">
            <ul>
                <li><a href="#whoWeAre">Our Ethos</a></li>
                <li><a href="#whatWeDo">What we do</a></li>
                <li><a href="#affiliates">Testimonials</a></li>
                <li><Link to="/contact">Get In Touch</Link></li>
            </ul>
        </nav>
    </header>
)
}
Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
