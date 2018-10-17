import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SignUp extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  getInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()

    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      this.props.history.push('/dashbord')
    })
    .catch(err => JSON.stringify(err))
  }

  render() {
    return (
      <React.Fragment>
          <div className="row">
            <form onSubmit={this.submit} className="col s12 offset-m3">
              <h1>Sign Up</h1>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_name" type="text" name='username' onChange={this.getInput} required/>
                  <label htmlFor="user_name">Username</label>
                  <span className="helper-text">Only numbers and letters</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_email" type="email" name="email" onChange={this.getInput} required/>
                  <label htmlFor="user_email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_password" type="password" name="password" onChange={this.getInput} required/>
                  <label htmlFor="user_password">Password</label>
                  <span className="helper-text">Must be 12 characters, letters and numbers</span>
                </div>
              </div>  
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
          </div>
        </React.Fragment>
    )
  }
}

export default withRouter(SignUp);
