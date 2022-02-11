import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Product from "./Product"; 
import ShoppingCart from "./ShoppingCart";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={Product} />
            <Route path="/cart" exact component={ShoppingCart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
