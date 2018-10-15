import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Dashbord from './components/dashbord/Dashbord'
import NewPoll from './components/newPoll/NewPoll'
import Login from './components/login/Login'
import Signup from './components/signup/SignUp'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashbord' component={Dashbord} />
            <Route path='/newpoll' component={NewPoll}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </div> 
      </BrowserRouter>
      
    );
  }
}

export default App;
