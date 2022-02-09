import React, { Component } from "react";
import NavBar from "./NavBar";
import Explore from "./MainContent";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Explore />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
