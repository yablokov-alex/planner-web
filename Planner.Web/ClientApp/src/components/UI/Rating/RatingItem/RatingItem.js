import React from 'react';
import './RatingItem.scss';

const ratingItem = (props) => (
    <div className="rating-item">
        <label className="radio">
            <input type="radio" name="rating" />
            <span>{props.number}</span>
        </label>
    </div>
);

export default ratingItem;