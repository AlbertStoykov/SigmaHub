import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// changed activeClassName since it does not exist after react v6 :D
const NavBar = () => {
  return (
    <nav>
      <NavLink className="home-link" to="/">
      <img src="\images\logo.png" id="logo" />
      </NavLink>
      <NavLink className="home-link" to="/">
        Pull Requests
      </NavLink>
      <NavLink
        id="Issues"
        to="/"
      >
        Issues
      </NavLink>
      <NavLink
        id="Marketplace"
        to="/"
      >
        Marketplace
      </NavLink>
      <NavLink
        id="Explore"
        to="/"
      >
        Explore
      </NavLink>
      <NavLink
        id="Explore"
        to="/"
      >
              <div className="svg-container">
        <object
          id="bell-icon"
          data="\images\notification-bell-alarm.svg"
          width="30"
          height="20"
        />
        <object
          id="plus-icon"
          data="\images\add-plus.svg"
          width="30"
          height="20"
        />
        <object
          id="user-icon"
          data="\images\user-avatar-filled-alt.svg"
          width="30"
          height="20"
        />
      </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
