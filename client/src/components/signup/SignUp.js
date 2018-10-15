import React, { Component } from 'react'

class SignUp extends Component {

  submit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  render() {
    return (
      <React.Fragment>
          <div onSubmit={this.submit} className="row">
            <form className="col s12 offset-m3">
              <h1>Sign Up</h1>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_name" type="text" required/>
                  <label htmlFor="user_name">User Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_email" type="email" required/>
                  <label htmlFor="user_email">First Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="user_password" type="password" required/>
                  <label htmlFor="user_password">Password</label>
                </div>
              </div>  
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
          </div>
        </React.Fragment>
    )
  }
}

export default SignUp;
