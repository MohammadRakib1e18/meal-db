import React from 'react';
import Email from '../Email/Email';
import Header from '../Header/Header';
import Meal from '../MealCollection/Meal';

const Home = () => {
    return (
      <div>
        <Header></Header>
        <Meal></Meal>
        <Email></Email>
      </div>
    );
};

export default Home;