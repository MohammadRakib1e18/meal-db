import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.meal);
    return (
        <ol className="cart">
            {
                props.meal.map(m => <li><span>{m.mealName}</span> <span class="quantity"> [{m.Quantity}]</span></li>)
            }
        </ol>
    );
};

export default Cart;