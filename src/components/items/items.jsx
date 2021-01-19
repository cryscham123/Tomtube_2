import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";
import "./items.scss";
import Item from '../item/item';

const Items = ({ youtube }) => {
    const [items, setItems] = useState([])
    let { pathname } = useLocation();
    const getItems = () => {
        if (pathname === "/" || pathname.slice(0,8) === "/details") {
            youtube.mostViewed()
            .then(items => setItems(items))
        } else {
            youtube.search(pathname.slice(8))
            .then(items => setItems(items))
        }
    }
    useEffect(getItems, [pathname])
        return (
            <ul className="items">
                <p className="items__info">
                    {pathname === "/" || pathname.slice(0,8) === "/details" ? "Most Viewed..." : "Results..."}
                </p>
                {items.map(item => <Item
                    key={typeof item.id === 'string' ? item.id : item.id.videoId}
                    id={typeof item.id === 'string' ? item.id : item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    des={item.snippet.description}
                    thumbnails={item.snippet.thumbnails.medium.url}
                    />)}
            </ul>
        );
    }

export default Items;