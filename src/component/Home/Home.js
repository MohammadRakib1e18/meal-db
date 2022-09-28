import React from 'react';
import Header from '../Header/Header';
import Meal from '../MealCollection/Meal';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Meal></Meal>
        </div>
    );
};
export default Home;