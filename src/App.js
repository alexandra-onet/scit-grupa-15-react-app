import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <div className="App">
          <Header changePage={this.changePage} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/meal">
              <Meal />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <p>Page not found</p>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
