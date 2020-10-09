import React from 'react';
import Img from 'gatsby-image'
const Affiliate = ({imgUrl}) => {
    return (
        <div className="affiliate-card">
            <Img fluid={imgUrl} alt="affiliation" />
        </div>
    );
}

export default Affiliate;