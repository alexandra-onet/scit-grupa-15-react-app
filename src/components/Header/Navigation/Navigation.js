import React from "react";
import { NavButton } from "./NavButton";

import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation(props) {
  return (
    <div className="header-navigation">
      <Link to="/">
        <NavButton label="Home" selected={true} changePage={props.changePage} />
      </Link>

      <Link to="/meal">
        <NavButton label="Meal" changePage={props.changePage} />
      </Link>

      <Link to="/contact">
        <NavButton label="Contact" changePage={props.changePage} />
      </Link>
    </div>
  );
}
