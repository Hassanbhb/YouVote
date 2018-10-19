import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Dashbord extends Component {
  state = {
    user: {}
  }
  
  componentDidMount(){
    fetch('http://localhost:8080/', {
     headers: {
       authorization: "Bearer "+ localStorage.token
     }
    })
    .then(res => res.json())
    .then(result => {
      if(result.user){
        this.setState({
          user: {
            ...result.user
          }
        })
      }else{
        localStorage.removeItem('token');
        this.props.history.push('/login')
      }
      
    })
    .catch(err => console.log(err));
    // if(localStorage.token){
    //   this.props.history.push('/dashbord')
    // }else{
    //   this.props.history.push('/login')
    // }
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4>Username: {this.state.user.username}</h4>
          <div className="collection with-header">
            <h1 className="collection-header">My Polls</h1>
            <a href="#!" className="collection-item"><span className="badge">1 votes</span><i className="fas fa-chart-pie"></i> My polls title</a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Dashbord);
