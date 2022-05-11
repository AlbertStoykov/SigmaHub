import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// changed activeClassName since it does not exist after react v6 :D
const NavBar = () => {
  return (
    <nav>
      <img src="\images\logo.png" id="logo" />
      <NavLink className="home-link" to="/">
        Pull Requests
      </NavLink>
      <NavLink
        id="Issues"
        className={(navData) => (navData.isActive ? "active" : "none")}
        to="/"
      >
        Issues
      </NavLink>
      <NavLink
        id="Marketplace"
        className={(navData) => (navData.isActive ? "active" : "none")}
        to="/"
      >
        Marketplace
      </NavLink>
      <NavLink
        id="Explore"
        className={(navData) => (navData.isActive ? "active" : "none")}
        to="/"
      >
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
