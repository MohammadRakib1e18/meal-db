import React from 'react';
import './Navbar.css';
import mealdb from '../../Images/mealdb-logo.png';

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={mealdb} alt="meal-db-logo" />
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;