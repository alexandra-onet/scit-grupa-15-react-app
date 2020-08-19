import React from "react";

import "./Header.css";
import { AppLogo } from "./AppLogo";
import { Navigation } from "./Navigation/Navigation";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <div className="header">
      <AppLogo />
      <Navigation />
      <SearchBar />
    </div>
  );
}
