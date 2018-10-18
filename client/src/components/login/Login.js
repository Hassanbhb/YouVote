import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  getInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => this.props.history.push('/dashbord'))
    .catch(err => console.log(err));
  }
  render() {
    return (
        <React.Fragment>
          <div className="row">
            <form onSubmit={this.submit} className="col s12 offset-m3">
              <h1>Login</h1>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_name" type="text" name="username" onChange={this.getInput} required/>
                  <label htmlFor="user_name">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_password" type="password" name="password" onChange={this.getInput} required/>
                  <label htmlFor="user_password">Password</label>
                </div>
              </div>  
              <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
            </form>
          </div>
        </React.Fragment>
    )
  }
}

export default withRouter(Login);
