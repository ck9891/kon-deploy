import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Testimonial = (props) => {

    return(
        <div className="testimonial">
            <div className="icon-holder">
                <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
            <div className="testimonial-body">
                <blockquote>{props.text}</blockquote>
                <p>{props.person}</p>
            </div>
        </div>
    )
}

export default Testimonial