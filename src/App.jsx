import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
