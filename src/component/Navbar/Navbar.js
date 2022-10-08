import React from "react";
import "./Navbar.css";
import mealdb from "../../Images/mealdb-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={mealdb} alt="meal-db-logo" />
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="products"
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="orders"
          >
            <li>Orders</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="about"
          >
            <li>About Us</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
