import React from 'react';
import './Navbar.css';
import mealdb from '../../Images/mealdb-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={mealdb} alt="meal-db-logo" />
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='products'><li>Products</li></Link>
                    <Link to='about'><li>About Us</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;