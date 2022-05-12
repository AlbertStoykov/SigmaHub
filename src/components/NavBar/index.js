import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// changed activeClassName since it does not exist after react v6 :D
const NavBar = () => {
  return (
    <nav>
      <NavLink className="home-link" to="/">
        <img
          src="https://unrivaled-heliotrope-cec12b.netlify.app/images/logo.png"
          id="logo"
        />
      </NavLink>
      <NavLink className="search" to="/search">
        Search
      </NavLink>
      <NavLink className="pull" to="/pull-requests">
        Pull Requests
      </NavLink>
      <NavLink id="Issues" to="/issues">
        Issues
      </NavLink>
      <NavLink id="Marketplace" to="/marketplace">
        Marketplace
      </NavLink>
      <NavLink id="Explore" to="/explore">
        Explore
      </NavLink>
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
    </nav>
  );
};

export default NavBar;
