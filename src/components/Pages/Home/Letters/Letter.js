import React from "react";

import "./Letter.css";

export function Letter(props) {
  let cssClass = "letter";

  if (props.selected) {
    cssClass = cssClass + " letter-selected";
  }

  // console.log("inn");

  return (
    <p
      className={cssClass}
      onClick={() => {
        props.changeLetter(props.value);
      }}
    >
      {props.value}
    </p>
  );
}
