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
                <p>{props.person}</p>
                <blockquote>{props.text}</blockquote>
            </div>
        </div>
    )
}

export default Testimonial