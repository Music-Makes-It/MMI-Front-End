// this page needs more work
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <div>
          <div class="mobile-sticky-body-overlay"></div>

          <div class="wrapper">
            <Sidebar />
          </div>
          <div class="page-wrapper">
            <Header />
          </div>

          <div class="page-wrapper">
            <Footer />
          </div>
          <h4 className="m-1 p-2 border-bottom">Login</h4>

          {/* Email  confirmation starts here team */}
          <div className="form-group form-row m-4">
            <label className="col-lg-4">Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          {/* Email confrimation ends */}

          {/* Password confirmation starts here team */}
          <div className="form-group form-row m-4">
            <label className="col-lg-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>
          {/* Password ends */}

          <div className="text-right">
            {this.state.message}

            <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
              Login
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={this.onSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  } //end of render

  //This will execute when the user clicks on the 'Login' button
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      // we need to send the email and password to the server,
      // more work needs to be done here
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);

    if (body.length > 0) {
      //if mmi customers are successfully logged in, then ...
      this.setState({
        message: (
          <span className="text-success">Awesome, you are Logged-in</span>
        ),
      });
    } else {
      //if mmi customers encounter an error then ...
      this.setState({
        message: (
          <span className="text-danger">
            Unfortunately our dedicated team at MMI has encountered an issue,
            please try again
          </span>
        ),
      });
    }
  };
}
