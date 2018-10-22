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
    //   fetch("http://localhost:8080/", {
    //     headers: {
    //       authorization: "Bearer " + localStorage.token
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(result => {
    //       console.log(result);
    //       if (result.user) {
    //         this.setState({
    //           user: {
    //             ...result.user
    //           }
    //         });
    //       } else {
    //         localStorage.removeItem("token");
    //         this.props.history.push("/login");
    //       }
    //     })
    //     .catch(err => console.log(err));
    //   // if(localStorage.token){
    //   //   this.props.history.push('/dashbord')
    //   // }else{
    //   //   this.props.history.push('/login')
    //   // }
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
