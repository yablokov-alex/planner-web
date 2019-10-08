import React from 'react';
import './Block.scss'

const block = (props) => {
  let classes = ['block__box'];

  if (props.className) {
    classes.push(props.className);
  }

  return (
    <div className={classes.join(' ')}>
      <div className="block__title">{props.title}</div>
      {props.children}
    </div>
  );
}

export default block;