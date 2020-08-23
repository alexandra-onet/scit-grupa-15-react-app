import React from "react";

export class Counter extends React.Component {
  state = {
    numberOfClicks: 3,
    initialNrOfClicks: 3,
  };

  incrementClicks = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  };

  resetClicks = () => {
    this.setState({ numberOfClicks: this.state.initialNrOfClicks });
  };

  render() {
    console.log(this.state);

    return (
      <div className="counter">
        <button className="counter-click" onClick={this.incrementClicks}>
          click me
        </button>
        <button className="counter-click" onClick={this.resetClicks}>
          reset
        </button>
        <p className="counter-number">{this.state.numberOfClicks}</p>
      </div>
    );
  }
}
