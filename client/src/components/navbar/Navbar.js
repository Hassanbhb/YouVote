import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue lighten-3">
          <Link to="/" className="brand-logo">YouVote</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/Dashbord">Dashbord</Link></li>
            <li><Link to="/newpoll">New Poll</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar;
