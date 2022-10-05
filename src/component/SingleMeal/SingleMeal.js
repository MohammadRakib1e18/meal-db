import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleMea.css";

const SingleMeal = (props) => {
  const { strMeal, strCategory, strTags, strMealThumb, strInstructions } =
    props.meal;
  console.log(typeof Number(props.meal.idMeal));
  let index = Number(props.meal.idMeal) % 3;

  const addToCart = props.btn;
  if(true){
    return (
      <div className="meal" data-aos="fade-up" data-aos-duration="2000">
        <section className="meal-description">
          <img src={strMealThumb} alt="" />
          <h3>{strMeal}</h3>
          <small>Category: {strCategory}</small>
          <small>Tags: {strTags ? strTags : "Mysterious"}</small>
          <p>
            {strInstructions.slice(0, 100) + " ..."}
            <a href="https://www.themealdb.com">Continue</a>
          </p>
        </section>
        <button
          onClick={() => {
            addToCart(strMeal);
          }}
        >
          Add to Cart{" "}
          <span className="shopping-cart-icon">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    );
  }
};

export default SingleMeal;
