import React from "react";
import { NavButton } from "./NavButton";

import "./Navigation.css";

export function Navigation(props) {
  return (
    <div className="header-navigation">
      <NavButton label="Home" selected={true} changePage={props.changePage} />
      <NavButton label="Meal" changePage={props.changePage} />
      <NavButton label="Contact" changePage={props.changePage} />
    </div>
  );
}
