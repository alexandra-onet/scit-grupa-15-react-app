import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Pages/Home/Home";

export function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
