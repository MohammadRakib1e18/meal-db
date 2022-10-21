import React, { useContext, useState } from "react";
import "./Navbar.css";
import mealdb from "../../Images/mealdb-logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../contexts/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result =>{
      console.log(result);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  

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
          {user?.uid ? (
            <button onClick={handleLogOut}>Sign Out</button>
          ) : (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="login"
              >
                <li>Sign In</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="register"
              >
                <li>Sign Up</li>
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
