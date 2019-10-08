import React from 'react';
import './Checkbox.scss';

const checkbox = (props) => {
    let classes = [props.className];

    if (props.type === 'small') {
        classes.push('checkbox-small');
    }

    return (
        <div className={classes.join(' ')}>
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    name="check" 
                    defaultChecked={props.checked} 
                    onChange={props.clicked} />
                <span>{props.text}</span>
            </label>
        </div>
    )
};

export default checkbox;