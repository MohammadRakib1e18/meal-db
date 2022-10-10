import React, { useEffect, useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./Orders.css";

const Orders = () => {
  const [selectedMeals, setSelectedMeals] = useState([]);

  document.title = "Home:Orders";

  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    let orders = [];
    for (let id in storedCart) {
      let data = storedCart[id];
      let Quantity = data[0];
      let strMeal = data[1];
      orders.push({ idMeal: id, Quantity, strMeal });
    }
    setSelectedMeals(orders);
  }, []);

  const deleteItem = (item) => {
    console.log(item);
    let storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    let remOrders = [];
    for (let id in storedCart) {
      if (id == item.idMeal) {
        removeFromDb(item.idMeal);
      } else {
        let data = storedCart[id];
        let Quantity = data[0];
        let strMeal = data[1];
        remOrders.push({ idMeal: id, Quantity, strMeal });
      }
    }
    setSelectedMeals(remOrders);
  };

  return (
    <>
      <h2 className="order-title">Here are your Orders!</h2>
      <div className="cart-container order-container">
        <Cart meal={selectedMeals} deleteItem={deleteItem}></Cart>
      </div>
    </>
  );
};

export default Orders;
