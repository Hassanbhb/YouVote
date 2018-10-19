import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Joi from 'joi'
import { toast } from 'react-toastify'
import Loading from '../Loading'

class Login extends Component {

  state = {
    logginIn: true,
    user:{
      username: '',
      password: ''
    }
  }

  componentDidMount(){
    if(localStorage.token){
      this.props.history.push('/dashbord')
    }
  }

  getInput = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  submit = (e) => {
    e.preventDefault();

    if(this.validate()){
      fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok){
        return res.json()
      }
      //if server sends error throw it to the catch
      return res.json().then(err => {
        throw new Error(err.message)
      })
    })
    .then(response => {
      //login success
      this.setState({
        logginIn: false
      })
      localStorage.token = response.token
      toast.success('Welcome Back!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setTimeout(() => {
        this.props.history.push('/dashbord')
      }, 1000);
    })
    .catch(err => {
      //login failed
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
    } 
  }

  validate = () => {
    const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()

    })
    //validate data
    const result = Joi.validate(this.state.user, schema);
    if(result.error === null){
      return true
    }

    if(result.error.message.includes('username')){
      toast.error('Error: invalid username !', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }else{
      toast.error('Error: invalid password !', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
    
  }


  render() {
    return (
        <React.Fragment>
          <div className="center">
          { this.state.logginIn ? 
            <div className="row">
              <form onSubmit={this.submit} className="col s12 m6 offset-m3">
                <h1>Login</h1>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="user_name" type="text" name="username" onChange={this.getInput} required/>
                    <label htmlFor="user_name">Username</label>
                    <span className="helper-text">Only numbers and letters</span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="user_password" type="password" name="password" onChange={this.getInput} required/>
                    <label htmlFor="user_password">Password</label>
                    <span className="helper-text">Must be 12 characters, letters and numbers</span>
                  </div>
                </div>  
                <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
              </form>
            </div> : <Loading /> }
          </div>
        </React.Fragment>
    )
  }
}

export default withRouter(Login);
