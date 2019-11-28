import React from 'react'

const Testimonial = (props) => {

    return(
        <div>
            <div className="icon-holder">

            </div>
            <div className="testimonial-body">
                <blockquote>{props.text}</blockquote>
                <p>{props.person}</p>
            </div>
        </div>
    )
}