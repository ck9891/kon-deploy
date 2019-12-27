import React from 'react';

const Affiliate = ({imgUrl}) => {
    return (
        <div className="affiliate-card">
            <img src={imgUrl} />
        </div>
    );
}

export default Affiliate;