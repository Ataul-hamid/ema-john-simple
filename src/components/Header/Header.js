import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">


            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Manage Inventory Review</a>
            </nav>
        </div>
    );
};

export default Header;