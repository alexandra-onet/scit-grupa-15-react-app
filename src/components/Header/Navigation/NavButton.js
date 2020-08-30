import React from "react";

import "./NavButton.css";
import { withRouter } from "react-router-dom";

// with router is a function that help us to connect to the router context
// we need to connect to router so that we can check the current url 
// by knowing which is the current url, we can check against the label of the button, thus knowing is is selected

export const NavButton = withRouter(props => {

  console.log(props);
  let cssClass = "header-nav-button";

  if ((props.location.pathname === '/' && props.label === 'Home') 
  || props.location.pathname.includes(props.label.toLowerCase())) {
    cssClass = cssClass + "  selected-nav-button";
  }

  return (
    <button
      className={cssClass}
    >
      {props.label}
    </button>
  );
});

