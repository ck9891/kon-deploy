import React from 'react';
import Img from 'gatsby-image'

const Affiliate = ({imgUrl}) => {
    return (
        <div className="affiliate-card">
            <img src={imgUrl} />
        </div>
    );
}

export default Affiliate;