import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Dashbord from "./components/dashbord/Dashbord";
import NewPoll from "./components/newPoll/NewPoll";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import { ToastContainer } from "react-toastify"; //for alerts
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {console.log(this.props.isAuthenticated)}
            <Route
              path="/dashbord"
              render={props => (
                <Dashbord isAuthenticated={this.props.isAuthenticated} />
              )}
            />
            <Route
              path="/newpoll"
              render={props => (
                <NewPoll isAuthenticated={this.props.isAuthenticated} />
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
