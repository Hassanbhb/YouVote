import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Joi from 'joi'
import { toast } from 'react-toastify'//alerts


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

    //if input validated
    if (this.validate()) {
      //send to server
      fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if(res.ok){
            return res.json()
          }
          //if res is not 200
          return res.json().then(err => {
            throw new Error(err.message)
          })
        }).then(() => {
          toast.success('success: Welcome !', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500
          });
          this.props.history.push('/dashbord')
        })
        .catch(err => {
          //if err (username is a duplicate)
          toast.error(`${err}`, {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        });
    }
    
  }

  //validate data with joi
  validate = () => {
    //set schema
    const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
    })
    //check if the state is valid
    const result = Joi.validate(this.state, schema);
    if(result.error === null){
      //if yes then retur true
      return true
    }

    //if error has a keyword then sed error for that keyword
    if(result.error.message.includes('username')){
      toast.error('Error: invalid username !', {
        position: toast.POSITION.BOTTOM_RIGHT
      });

    }else if(result.error.message.includes('password')){
      toast.error('Error: invalid password !', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }else{
      toast.error('Error: invalid email !', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        
          <div className="container">
          <div className='row center-align'>
            <div className="preloader-wrapper active big">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <form onSubmit={this.submit} className="col s12 m6 offset-m3">
              <h1>Sign Up</h1>
              <div className="row">
                <div className="input-field col s12">
                  <input id="user_name" type="text" name='username' onChange={this.getInput} required/>
                  <label htmlFor="user_name">Username</label>
                  <span className="helper-text">Only numbers and letters</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="user_email" type="email" name="email" onChange={this.getInput} required/>
                  <label htmlFor="user_email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="user_password" type="password" name="password" onChange={this.getInput} required/>
                  <label htmlFor="user_password">Password</label>
                  <span className="helper-text">Must be 12 characters, letters and numbers</span>
                </div>
              </div>  

              <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>

            </form>
          </div>
        </div>  
        </React.Fragment>
    )
  }
}

export default withRouter(SignUp);
