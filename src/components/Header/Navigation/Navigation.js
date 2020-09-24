import React from "react";
import { NavButton } from "./NavButton";

import "./Navigation.css";

export class Navigation extends React.Component {
  state = {
    currentSelectedButton: "Home",
  };

  handleButtonClick = (event) => {
    console.log(event.target);

    this.setState({currentSelectedButton: event.target.id})

  };
  render () {
      return (
    <div className="header-navigation">
      <NavButton 
          label="Home"           
          selected={this.state.currentSelectedButton === "Home"}
          onClick={this.handleButtonClick} />
      <NavButton 
          label="Meal" 
          selected={this.state.currentSelectedButton === "Meal"}
          onClick={this.handleButtonClick}/>
      <NavButton 
          label="Contact" 
          selected={this.state.currentSelectedButton === "Contact"}
          onClick={this.handleButtonClick}/>
    </div>
  );
  }
}