import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Pages/Home/Home";
import { Contact } from "./components/Pages/Contact/Contact";
import { Meal } from "./components/Pages/Meal/Meal";

export class App extends React.Component {
  state = {
    currentPage: "Home",
  };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.state.currentPage === "Home" ? <Home /> : null}
        {this.state.currentPage === "Meal" ? <Meal /> : null}
        {this.state.currentPage === "Contact" ? <Contact /> : null}
      </div>
    );
  }
}
