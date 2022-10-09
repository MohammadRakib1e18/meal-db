import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleMea.css";

const SingleMeal = (props) => {
  const { strMeal, strCategory, strTags, strMealThumb, strInstructions } =
    props.meal;

  const addToCart = props.btn;
  if(true){
    return (
      <div
        className="meal"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
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
