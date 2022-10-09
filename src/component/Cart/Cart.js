import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ meal, deleteItem }) => {
  return (
    <ol className="cart">
      {meal.map((m) => (
        <li>
          <span className="mealName">{m.mealName}</span>{" "}
          <span className="quantity"> [{m.Quantity}]</span>
          <FontAwesomeIcon
          onClick={()=>{deleteItem(m)}}
            className="deleteItem"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </li>
      ))}
    </ol>
  );
};

export default Cart;
