import React, { useState } from "react";
import "./Navbar.css";
import mealdb from "../../Images/mealdb-logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div>
      <span
        className="menuBar"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon className="icon" icon={faBars}></FontAwesomeIcon>
        )}
      </span>
      <nav>
        <img src={mealdb} alt="meal-db-logo" />
        <ul className={`${open ? "showNav" : "hideNav"}`}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/home"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="products"
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="orders"
          >
            <li>Orders</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
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
