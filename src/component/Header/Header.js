import React from "react";
import './Header.css';
import headerMeal from "../../Images/meal-icon.png";

const Header = () => {
  let api = "https://www.themealdb.com/api.php";
  return (
    <div className="banner">
      <img src={headerMeal} alt="" />
      <div className="header-text">
        <h1>Welcome to TheMealDB</h1>

        <p>
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world.
          <br /> We also offer a<a href={api}> free JSON API</a> for anyone
          wanting to use it, with additional features for subscribers.
        </p>
      </div>
      <img src={headerMeal} alt="" />
    </div>
  );
};

export default Header;
