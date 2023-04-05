import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='nav-section'>
            <img src={logo} />

            <div className='nav-items'>
                <Link to="./shop">Shop</Link>
                <Link to="./order">Order</Link>
                
                <Link to="./inventory">Inventory</Link>
                <Link to="./login">Login</Link>
            </div>
        </div>
    );
};

export default Header;