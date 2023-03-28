import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='nav-section'>
            <img src={logo}/>
            
            <div className='nav-items'>
            <a href="./order">Order</a>
                <a href="./order-review">Order Review</a>
                <a href="./manage-inventory">Manage Inventory</a>
                <a href="./login">Login</a>
            </div>
        </div>
    );
};

export default Header;