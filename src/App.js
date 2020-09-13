import React from "react";

import "./App.css";

// check the console for results
export class App extends React.Component {
  handleGetAllMovies = () => {
    fetch("https://movies-app-siit.herokuapp.com/movies?take=99999999")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  handleGetAllMoviesByTitleAndYear = () => {
    fetch("https://movies-app-siit.herokuapp.com/movies?Title=man&Year=2016")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  handleLogin = () => {
    fetch("https://movies-app-siit.herokuapp.com/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mouse",
        password: "cat",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
      });
  };

  handleLogOut = () => {
    fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      headers: {
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  handleAddMovie = () => {
    fetch("https://movies-app-siit.herokuapp.com/movies", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        Title: "Stefan cel Mare",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleGetAllMovies}>Get all movies</button>
        <button onClick={this.handleGetAllMoviesByTitleAndYear}>
          Get movies by Title and Year
        </button>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogOut}>Logout</button>
        <button onClick={this.handleAddMovie}>Add Movie</button>
      </div>
    );
  }
}

export default App;
