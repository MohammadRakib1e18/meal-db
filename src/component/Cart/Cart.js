import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <ol className="cart">
            {
                props.meal.map(m => <li><span className='mealName'>{m.mealName}</span> <span className="quantity"> [{m.Quantity}]</span></li>)
            }
        </ol>
    );
};

export default Cart;