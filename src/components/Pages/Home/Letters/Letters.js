import React from "react";
import { Letter } from "./Letter";

import "./Letters.css";
import { generateAlphabetList } from "./LettersUtils";

export function Letters(props) {
  return (
    <div className="letters">
      {generateAlphabetList().map((letter, index) => {
        // console.log(letter, props.currentLetter === letter);
        return (
          <Letter
            value={letter}
            key={index}
            selected={props.currentLetter === letter}
            changeLetter={props.changeLetter}
          />
        );
      })}
    </div>
  );
}
