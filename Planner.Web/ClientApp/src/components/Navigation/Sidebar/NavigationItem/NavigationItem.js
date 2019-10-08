import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.scss';

const navigationItem = (props) => (
    <div className="sidebar__row">
        <NavLink to={props.to}>
            <span className="sidebar__icon">
                <svg className="icon-svg">
                    <use xlinkHref={props.svgHash}></use>
                </svg>
            </span>
            <span className="sidebar__text">
                {props.title}
                {props.count ? <span>{props.count}</span> : null}
            </span>
        </NavLink>
    </div>
);

export default navigationItem;