import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import './Expert.css';

const Expert = () => {
    return (
      <div className="expert">
        <span
          style={{ fontSize: "2.5rem", color: "#051d38", fontWeight: "500" }}
        >
          Hello, I'm Expert in 👓
        </span>
        <span
          style={{ fontSize: "2.5rem", color: "#F0932B", fontWeight: "bold" }}
        >
          <Typewriter
            words={["Problem solving", "JavaScript", "Algorithm"]}
            loop={150}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    );
};

export default Expert;