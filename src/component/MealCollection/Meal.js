import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";
import SingleMeal from "../SingleMeal/SingleMeal";
import "./Meal.css";

const Meal = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals)
        setLoadedMeals(data.meals);
      });
  }, []);
  const addToCart = (mealName) => {
    let order = selectedMeals.find(meal => meal.mealName === mealName)
    if (!order){
      let newOrder = {mealName, Quantity:1};
      setSelectedMeals([...selectedMeals, newOrder]);
      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully!",
        showConfirmButton: true,
        timer: 1500,
      });
    }
    else{
      selectedMeals.forEach(meal=>{
        if(meal === order){
          if(meal.Quantity===5){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You can't add more than 5 products!",
            });
          }
          else{
            meal.Quantity++;
            Swal.fire({
              icon: "success",
              title: "Order Placed Successfully!",
              showConfirmButton: true,
              timer: 1000,
            });
          }
        }
      })
      setSelectedMeals([...selectedMeals]);
    }
  };

  return (
    <div className="production">
      <div className="meal-container">
        {loadedMeals.map((meal) => (
          <SingleMeal
            meal={meal}
            btn={addToCart}
            key={meal.idMeal}
          ></SingleMeal>
        ))}
      </div>
      <div className="cart-container">
        <h2>Selected Food</h2>
        <Cart meal={selectedMeals}></Cart>
      </div>
    </div>
  );
};

export default Meal;
