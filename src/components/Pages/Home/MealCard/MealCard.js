import React from "react";

import "./MealCard.css";

import { Loader } from "../../../common/Loader/Loader";

export class MealCard extends React.Component {
  state = {
    imgLoading: true,
  };

  handleImgLoad = () => {
    console.log("img loaded");
    this.setState({ imgLoading: false });
  };

  render() {
    return (
      <div className="meal-card">
        {this.state.imgLoading ? <Loader /> : null}

        <img
          src={this.props.imgSrc}
          className={this.state.imgLoading ? "img-invisible" : ""}
          alt="img"
          onLoad={this.handleImgLoad}
        />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
