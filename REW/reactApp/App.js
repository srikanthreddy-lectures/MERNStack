import React from "react";
import "./App.css";
import thumb from "./img.png";

//Import Components
import Nav from "./Nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="kmit">Hello React!!!!!</h1>
    <img src={thumb} alt="" />
  </div>
);

export default App;