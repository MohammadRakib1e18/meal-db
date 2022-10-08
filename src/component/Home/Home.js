import React, { useEffect } from 'react';
import Email from '../Email/Email';
import Header from '../Header/Header';
import Meal from '../MealCollection/Meal';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
    return (
      <div>
        <Header></Header>
        <Meal></Meal>
        <Email></Email>
      </div>
    );
};

export default Home;