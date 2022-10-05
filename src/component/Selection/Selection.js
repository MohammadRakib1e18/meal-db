import React, { useState } from "react";
import "./Selection.css";

const Selection = ({ getLetter }) => {
  const [prevButton, setPrevButton] = useState(null);
  const [prevText, setPrevText] = useState("");

  const btnHandler = (e) => {
    let currButton = e.target;
    let currText = currButton.innerText;

    if (currText === prevText) return;

    currButton.style.backgroundColor = "#053364";

    if (prevText && (currText !== prevText)) {
      prevButton.style.backgroundColor = "rgb(113, 136, 160)";
    }
    getLetter(currText);
    setPrevText(currText);
    setPrevButton(currButton);
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
        <li onClick={(event) => btnHandler(event)}>K</li>
        <li onClick={(event) => btnHandler(event)}>L</li>
      </ul>
    </div>
  );
};

export default Selection;
