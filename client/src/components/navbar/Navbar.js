import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar (){

    return (
      <div>
        <nav>
          {/* the movile navs materialize initialization is in public/index.html */}
          <div className="nav-wrapper blue lighten-3">
            <Link to="/" className="brand-logo">YouVote</Link>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger right"><i className="fas fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <SignedInLinks />
              <SignedOutLinks />
            </ul>
          </div>
        </nav>
  
        <ul className="sidenav" id="mobile-demo">
          <SignedInLinks />
          <SignedOutLinks />
        </ul>
      </div>
      
    ) 
}

export default Navbar;
