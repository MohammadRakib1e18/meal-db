import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";
import Selection from "../Selection/Selection";
import SingleMeal from "../SingleMeal/SingleMeal";
import "./Meal.css";
import { addToDb } from "../../utilities/fakedb";
import { removeFromDb } from "../../utilities/fakedb";

const Meal = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [letter, setLetter] = useState("a");

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoadedMeals(data.meals);
      });
  }, [letter]);

  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    let orders = [];
    for(let id in storedCart){
      let data = storedCart[id];
      let Quantity = data[0];
      let strMeal=data[1];
      orders.push({idMeal:id, Quantity, strMeal });
    }
    setSelectedMeals(orders);
  }, [loadedMeals]);

  const getLetter = (letter) => {
    if (letter) setLetter(letter);
  };

  const addToCart = (wholeMeal) => {
    console.log(wholeMeal);
    let order = selectedMeals?.find((meal) => meal.idMeal === wholeMeal.idMeal);
    if (!order) {
      addToDb(wholeMeal.idMeal, wholeMeal.strMeal);
      let newOrder = {
        strMeal: wholeMeal.strMeal,
        Quantity: 1,
        idMeal: wholeMeal.idMeal,
      };
      selectedMeals
        ? setSelectedMeals([...selectedMeals, newOrder])
        : setSelectedMeals([newOrder]);
      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully!",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      selectedMeals.forEach((meal) => {
        if (meal === order) {
          if (meal.Quantity === 5) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You can't add more than 5 products!",
            });
          } else {
            meal.Quantity++;
            addToDb(wholeMeal.idMeal, wholeMeal.strMeal);
            Swal.fire({
              icon: "success",
              title: "Order Placed Successfully!",
              showConfirmButton: true,
              timer: 1000,
            });
          }
        }
      });
      setSelectedMeals([...selectedMeals]);
    }
  };

  const deleteItem = (item) => {
    let storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    let remOrders = [];
    for (let id in storedCart) {
      if(id==item.idMeal){
        removeFromDb(item.idMeal);
      }else{
        let data = storedCart[id];
        let Quantity = data[0];
        let strMeal = data[1];
        remOrders.push({idMeal:id, Quantity, strMeal });
      }
    }
    setSelectedMeals(remOrders);
  };

  return (
    <>
      <Selection getLetter={getLetter}></Selection>
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
        <div
          className="cart-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2>Selected Food</h2>
          <Cart meal={selectedMeals} deleteItem={deleteItem}></Cart>
        </div>
      </div>
    </>
  );
};
export default Meal;
