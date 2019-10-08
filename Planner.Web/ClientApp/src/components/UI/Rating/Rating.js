import React from 'react';
import RatingItem from './RatingItem/RatingItem';
import './Rating.scss';

const rating = (props) => (

    <div className="rating">
        <RatingItem number="1" />
        <RatingItem number="2" />
        <RatingItem number="3" />
        <RatingItem number="4" />
        <RatingItem number="5" />
        <RatingItem number="6" />
        <RatingItem number="7" />
        <RatingItem number="8" />
        <RatingItem number="9" />
        <RatingItem number="10" />
    </div>
);

export default rating;