import React from 'react';
import { Link } from 'react-router-dom';
import "./item.scss";

const Item = ({ id, title, channel, des, thumbnails }) => {
    return (
        <Link to={{
            pathname: `/details/${id}`,
            state: { id, title, channel, des, thumbnails, fromNavigation: true }
        }}
            className="item"
            onClick={window.scroll({top:0,behavior:'smooth'})}>
            <img src={thumbnails} className="item__thumb"/>
            <div className="item__info">
                <h3 className="item__info__title">{title}</h3>
                <p className="item__info__channel">{channel}</p>
            </div>
        </Link>
    );
};

export default Item;