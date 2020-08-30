import React from "react";
import { NavButton } from "./NavButton";

import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation(props) {
  return (
    <div className="header-navigation">
      <Link to="/">
        <NavButton label="Home" />
      </Link>

      <Link to="/meal">
        <NavButton label="Meal"  />
      </Link>

      <Link to="/contact">
        <NavButton label="Contact"  />
      </Link>
    </div>
  );
}
