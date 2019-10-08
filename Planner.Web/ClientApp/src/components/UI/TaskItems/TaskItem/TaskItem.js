import React from 'react';
import './TaskItem.scss';
import Checkbox from '../../Checkbox/Checkbox';

const taskItem = (props) => (
    <div className="taskitem__row">
        <div className="taskitem__number">{props.number}</div>
        <Checkbox 
            text={props.task.name}
            className="taskitem__check"
            clicked={props.clicked}
            checked={props.task.isChecked} />
    </div>
);

export default taskItem;