import React from "react";
import { NavButton } from "./NavButton";

import "./Navigation.css";

export function Navigation() {
  return (
    <div className="header-navigation">
      <NavButton label="Home" selected={true} />
      <NavButton label="Meal" />
      <NavButton label="Contact" />
    </div>
  );
}
