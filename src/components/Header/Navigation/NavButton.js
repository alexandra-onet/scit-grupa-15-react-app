import React from "react";

import "./NavButton.css";

export function NavButton(props) {
  console.log(props);
  let cssClass = "header-nav-button";

  if (props.selected) {
    cssClass = cssClass + "  selected-nav-button";
  }

  return <button className={cssClass}>{props.label}</button>;
}

// function NavButton(props) {
//   let cssClass = "header-nav-button";

//   if (props.selected) {
//     cssClass = cssClass + "  selected-nav-button";
//   }

//   const button = document.createElement('button');
//   button.classList.add(cssClass);
//   button.innerText = props.label;

//   return button;
// }
