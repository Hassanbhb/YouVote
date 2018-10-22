import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Loading from "../Loading";
import { loginUser } from "../../store/actions/userActions";
import userLogin from "../../services/authService";

class Login extends Component {
  state = {
    logginIn: true,
    user: {
      username: "",
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

    if (this.validate()) {
      userLogin("POST", "auth/login", this.state.user).then(response => {
        if (response.token) {
          this.props.loginUser(response);
          toast.success("Welcome back!", {
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

  validate = () => {
    const schema = Joi.object().keys({
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{8,30}$/)
        .required()
    });
    //validate data
    const result = Joi.validate(this.state.user, schema);
    if (result.error === null) {
      return true;
    }

    if (result.error.message.includes("username")) {
      toast.error("Error: invalid username !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      toast.error("Error: invalid password !", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="center">
          {this.state.logginIn ? (
            <div className="row">
              <form onSubmit={this.submit} className="col s12 m6 offset-m3">
                <h1>Login</h1>
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
                    <span className="helper-text">
                      Only numbers and letters
                    </span>
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
                  Login
                </button>
              </form>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => {
      dispatch(loginUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
