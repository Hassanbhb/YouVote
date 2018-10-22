import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Dashbord extends Component {
  componentDidMount() {
    const { user } = this.props;
    if (Object.keys(user).length === 0) {
      this.props.history.push("/login");
    } else {
      console.log(user);
    }
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="container">
          <h4>Username: {user.username}</h4>
          <div className="collection with-header">
            <h1 className="collection-header">My Polls</h1>
            <a href="#!" className="collection-item">
              <span className="badge">1 votes</span>
              <i className="fas fa-chart-pie" /> My polls title
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(withRouter(Dashbord));
