import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //This executes when the component is mounted to the DOM
  constructor(props) {
    //console.log("constructor - ShoppingCart");
    super(props); //This is calling super class's constructor

    //initialization of the state
    this.state = {
      products: [
        { id: 1, productName: "T-shirt by Prince", price: 30, quantity: 0 },
        { id: 2, productName: "Sweater by J.cole", price: 70, quantity: 0 },
        {
          id: 3,
          productName: "Jumper by Rolling Stones",
          price: 60,
          quantity: 0,
        },
        { id: 5, productName: "T-Shirt by Flintwood", price: 45, quantity: 0 },
        { id: 6, productName: "Shoes by shoe guy", price: 100, quantity: 0 },
        {
          id: 7,
          productName: "T-shirt by Another One",
          price: 40,
          quantity: 0,
        },
        {
          id: 8,
          productName: "Sweater by Expensive music",
          price: 60,
          quantity: 0,
        },
        { id: 9, productName: "T-shirt by Immutable", price: 50, quantity: 0 },
        { id: 10, productName: "Sweater by Havoc", price: 80, quantity: 0 },
        {
          id: 11,
          productName: "Sweater by Nikki Minaj",
          price: 60,
          quantity: 0,
        },
        { id: 12, productName: "Shoes by The Beetles", price: 70, quantity: 0 },
      ],
    };
  }

  render() {
    //console.log("render - ShoppingCart");

    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  //Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    //send request to server
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    //the following code executes after receiving response from server
    //converting the response body into a JS object array
    var prods = await response.json();

    //the following code executes after converting response body into JS object array
    console.log(prods);

    //updating products into component's state
    this.setState({ products: prods });

    //console.log("componentDidMount - ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    /*console.log(
      "componentDidUpdate - ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );*/
    // if (prevProps.x != this.props.x) {
    //   //make http call
    // }
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ShoppingCart");
    //console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on Delete (X) button in the Product component.
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
