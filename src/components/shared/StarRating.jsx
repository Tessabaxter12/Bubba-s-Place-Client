import React, { useState } from 'react';

const StarRating = ({ totalStars }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (star) => {
    setSelectedStars(star);
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        style={{ cursor: 'pointer', color: starValue <= selectedStars ? 'gold' : 'gray' }}
                        onClick={() => handleStarClick(starValue)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
