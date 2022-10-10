import React, { useEffect } from 'react';
import './Products.css';
import productionImg from '../../Images/production.gif';

const Products = () => {
    useEffect(() => {
      document.title = "Home:Products";
    }, []);
    return (
        <div className='production-component'>
            <h1>Products are processing right now!</h1>
            <img src={productionImg} alt="" />
        </div>
    );
};

export default Products;