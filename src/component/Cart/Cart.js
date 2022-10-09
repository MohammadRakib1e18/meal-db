import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";
import empty_cart from "../../Images/animat-shopping-cart-color.gif";

const Cart = ({ meal, deleteItem }) => {
  if (meal.length === 0) {
    return (
      <div className="empty-cart">
        <img src={empty_cart} alt="" />
        <h3>Add some products</h3>
      </div>
    );
  }
  return (
    <ol className="cart">
      <div>
      {meal.map((m) => (
        <li key={m.id}>
          <span className="mealName">{m.mealName}</span>{" "}
          <span className="cart-icons">
            <span className="quantity"> [{m.Quantity}]</span>
            <FontAwesomeIcon
              onClick={() => {
                deleteItem(m);
              }}
              className="deleteItem"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </span>
        </li>
      ))}
      </div>

      <div>{meal.length ? <h3>Thanks for shopping!</h3> : 
      undefined}</div>
    </ol>
  );
};

export default Cart;
