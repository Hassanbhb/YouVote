import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (){

    return (
      <div>
        <nav>
          {/* the movile navs materialize initialization is in public/index.html */}
          <div className="nav-wrapper blue lighten-3">
            <Link to="/" className="brand-logo">YouVote</Link>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger right"><i className="fas fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/dashbord">Dashbord</Link></li>
              <li><Link to="/newpoll">New Poll</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </div>
        </nav>
  
        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/Dashbord">Dashbord</Link></li>
          <li><Link to="/newpoll">New Poll</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
      
    ) 
}

export default Navbar;
