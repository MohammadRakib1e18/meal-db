import React from 'react';
import Header from '../Header/Header';
import Meal from '../MealCollection/Meal';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";
import Expert from '../Expert/Expert';
import Email from '../Email/Email';

const Home = () => {
    return (
      <div className="container">
        <ScrollToTop smooth color="red" top="250" />
        <Navbar></Navbar>
        <Header></Header>
        {/* <Expert></Expert> */}

        <Meal></Meal>
        <Email></Email>
      </div>
    );
};
export default Home;