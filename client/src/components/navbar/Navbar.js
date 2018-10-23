import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { logoutUser } from "../../store/actions/userActions";

class Navbar extends Component {
  logout = () => {
    this.props.logoutUser(this.props.user);
  };

  render() {
    const links = this.props.isAuthenticated ? (
      <SignedInLinks logout={this.logout} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-3">
            <Link to="/" className="brand-logo">
              YouVote
            </Link>
            <a
              href="#!"
              data-target="mobile-demo"
              className="sidenav-trigger right"
            >
              <i className="fas fa-bars" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {links}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {links}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: user => {
      dispatch(logoutUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
