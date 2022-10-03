import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import './Expert.css';

const Expert = () => {
    return (
      <div className='expert'>
        <span style={{fontSize: '2rem'}}>Hello, I'm Expert in </span>
        <span style={{ fontSize:'2rem',  fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={150}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </div>
    );
};

export default Expert;