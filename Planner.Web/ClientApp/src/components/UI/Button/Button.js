import React from 'react';
import './Button.scss';

const button = (props) => {

    let classes = ['btn'];
    if (props.type === 'grey') {
        classes.push('btn--grey');
    }

    return (
        <div className="button__btn-wrap">
            <button className={classes.join(' ')}>{props.text}</button>
        </div>
    );
}

export default button;