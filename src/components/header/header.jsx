import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import Input from "./input/input";

const Header = () => {
    return (
        <header className="header">
            <Link className="header__title" to="/">
                <i className="fab fa-youtube header__title__icon"></i>
                <h3 className="header__title__title">TomTube</h3>
            </Link>
            <Input />
        </header>
    );
};

export default Header;