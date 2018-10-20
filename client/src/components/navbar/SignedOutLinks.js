import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks() {
  return (
    <React.Fragment>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
    </React.Fragment>
  )
}
