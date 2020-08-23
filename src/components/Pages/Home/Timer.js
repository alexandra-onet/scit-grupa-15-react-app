import React from "react";

import "./Timer.css";

export class Timer extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    timeList: [],
  };

  handleStartTimer = () => {
    console.log("click");

    this.interval = setInterval(() => {
      if (this.state.hour === 23) {
        this.setState({ hour: 0 });
      }

      if (this.state.minute === 59) {
        this.setState({ minute: 0 });
        this.setState({ hour: this.state.hour + 1 });
      }

      if (this.state.second === 59) {
        this.setState({ second: 0 });
        this.setState({ minute: this.state.minute + 1 });
      } else {
        this.setState({ second: this.state.second + 1 });
      }
    }, 10);
  };

  renderDigit(number) {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  }

  handleResetTimer = () => {
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  handleStopTimer = () => {
    clearInterval(this.interval);
  };

  handlePrintTime = () => {
    this.setState({
      timeList: [
        `${this.state.hour}:${this.state.minute}:${this.state.second}`,
        ...this.state.timeList,
      ],
    });
  };

  render() {
    console.log(this.state.timeList);

    return (
      <div className="wrapper-timer">
        <div className="timer-container">
          <div className="timer">
            <p className="hours">{this.renderDigit(this.state.hour)}</p>
            <p>:</p>
            <p className="minutes">{this.renderDigit(this.state.minute)}</p>
            <p>:</p>
            <p className="seconds">{this.renderDigit(this.state.second)}</p>
          </div>
          <button
            className="timer-button start-button"
            onClick={this.handleStartTimer}
          >
            Start Timer
          </button>

          <button
            className="timer-button reset-button"
            onClick={this.handleResetTimer}
          >
            Reset Timer
          </button>

          <button
            className="timer-button stop-button"
            onClick={this.handleStopTimer}
          >
            Stop Button
          </button>

          <button
            className="timer-button print-button"
            onClick={this.handlePrintTime}
          >
            Print Time
          </button>
        </div>
        <div className="print-time-container">
          {this.state.timeList.map((element, index) => (
            <p className="time-item">{element}</p>
          ))}
        </div>
      </div>
    );
  }
}
