import React, { useEffect } from 'react';
import './Products.css';

const Products = () => {
    useEffect(() => {
      document.title = "Home:Products";
    }, []);
    return (
        <div>
            <h1>Products aren't available right now!</h1>
        </div>
    );
};

export default Products;