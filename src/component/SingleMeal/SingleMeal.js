import React from "react";
import "./SingleMea.css";

const SingleMeal = (props) => {
  const { strMeal, strCategory, strTags, strMealThumb, strInstructions } =
    props.meal;

  const addToCart = props.btn;
  return (
    <div className="meal">
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
        Add to Cart
      </button>
    </div>
  );
};

export default SingleMeal;
