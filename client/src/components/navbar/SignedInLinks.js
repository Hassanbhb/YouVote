import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <React.Fragment>
      <li>
        <NavLink to="/dashbord">Dashbord</NavLink>
      </li>
      <li>
        <NavLink to="/newpoll">New Poll</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={props.logout}>
          Logout
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default SignedInLinks;
