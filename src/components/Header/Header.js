import React from "react";

import "./Header.css";
import { AppLogo } from "./AppLogo";
import { Navigation } from "./Navigation/Navigation";
import { SearchBar } from "./SearchBar";

export function Header(props) {
  return (
    <div className="header">
      <AppLogo />
      <Navigation changePage={props.changePage} />
      <SearchBar />
    </div>
  );
}
