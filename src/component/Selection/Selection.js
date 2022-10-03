import React, { useState } from "react";
import "./Selection.css";

const Selection = ({ getLetter }) => {
  const [prevButton, setPrevButton] = useState(null);
  const [prevText, setPrevText] = useState("");

  const btnHandler = (e) => {
    let currButton = e.target;
 
    if (prevText && (currButton.innerText === prevText)) return;
    
    currButton.style.backgroundColor = "#053364";
    currButton.innerHTML += ` <i class="fa fa-solid fa-check"></i>`;

    getLetter(currButton.innerText);
    setPrevText(currButton.innerText);
    setPrevButton(currButton);

    if (prevText && currButton.innerText !== prevText) {
      prevButton.style.backgroundColor = "rgb(113, 136, 160)";
      prevButton.innerText = prevButton.innerText.split(" ")[0];
    }
  };
  return (
    <div className="selections">
      <ul>
        <li onClick={(event) => btnHandler(event)}>A</li>
        <li onClick={(event) => btnHandler(event)}>B</li>
        <li onClick={(event) => btnHandler(event)}>C</li>
        <li onClick={(event) => btnHandler(event)}>D</li>
        <li onClick={(event) => btnHandler(event)}>E</li>
        <li onClick={(event) => btnHandler(event)}>F</li>
        <li onClick={(event) => btnHandler(event)}>G</li>
        <li onClick={(event) => btnHandler(event)}>H</li>
        <li onClick={(event) => btnHandler(event)}>I</li>
        <li onClick={(event) => btnHandler(event)}>J</li>
      </ul>
    </div>
  );
};

export default Selection;
