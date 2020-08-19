import React from "react";
import food from "../../food.svg";

import "./AppLogo.css";

export function AppLogo() {
  return <img src={food} alt="logo" className="app-logo" />;
}
