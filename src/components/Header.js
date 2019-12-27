import React from 'react'
import PropTypes from 'prop-types'
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
                <li><a href="#whoWeAre">Our Approach</a></li>
                <li><a href="#whatWeDo">What we do</a></li>
                <li><a href="#affiliates">Affiliates</a></li>
                <li><a href="#contact">Get In Touch</a></li>
            </ul>
        </nav>
    </header>
)
}
Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
