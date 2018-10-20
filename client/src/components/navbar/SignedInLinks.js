import React from 'react'
import { NavLink } from "react-router-dom"

export default function SignedInLinks() {
  return (
    <React.Fragment>
        <li><NavLink to="/dashbord">Dashbord</NavLink></li>
        <li><NavLink to="/newpoll">New Poll</NavLink></li>
    </React.Fragment>
  )
}
