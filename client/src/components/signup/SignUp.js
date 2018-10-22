import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify"; //alerts
import Loading from "../Loading";
import { connect } from "react-redux";
import { createUser } from "../../store/actions/userActions";
import saveUser from "../../services/authService";

class SignUp extends Component {
  state = {
    signingUp: true,
    user: {
      username: "",
      email: "",
      password: ""
    }
  };

  getInput = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  submit = e => {
    e.preventDefault();

    //if input validated
    if (this.validate()) {
      saveUser("POST", "auth/signup", this.state.user).then(response => {
        if (response.token) {
          this.props.createUser(response);
          toast.success("Welcome!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          this.props.history.push("/dashbord");
        } else {
          toast.error("Error: invalid username or password!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      });
    }
  };

  //validate data with joi
  validate = () => {
    //set schema
    const schema = Joi.object().keys({
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{8,30}$/)
        .required()
    });
    //check if the state is valid
    const result = Joi.validate(this.state.user, schema);
    if (result.error === null) {
      //if yes then retur true
      return true;
    }

    //if error has a keyword then sed error for that keyword
    if (result.error.message.includes("username")) {
      toast.error("Error: invalid username !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else if (result.error.message.includes("password")) {
      toast.error("Error: invalid password !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      toast.error("Error: invalid email !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container center-align active row">
          {this.state.signingUp ? (
            <form onSubmit={this.submit} className="col s12 m6 offset-m3">
              <h1>Sign Up</h1>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="user_name"
                    type="text"
                    name="username"
                    onChange={this.getInput}
                    required
                  />
                  <label htmlFor="user_name">Username</label>
                  <span className="helper-text">Only numbers and letters</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="user_email"
                    type="email"
                    name="email"
                    onChange={this.getInput}
                    required
                  />
                  <label htmlFor="user_email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="user_password"
                    type="password"
                    name="password"
                    onChange={this.getInput}
                    required
                  />
                  <label htmlFor="user_password">Password</label>
                  <span className="helper-text">
                    Must be 12 characters, letters and numbers
                  </span>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </form>
          ) : (
            <Loading />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp));
