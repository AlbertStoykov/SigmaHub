import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";
import bell from "./bell.svg";
import plus from "./plus.svg";
import user from "./user.svg";
// changed activeClassName since it does not exist after react v6 :D
const NavBar = () => {
  return (
    <nav>
      <NavLink className="home-link" to="/">
        <div className="img-container">
          <img src={logo} id="logo" />
        </div>
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
        <object id="bell-icon" data={bell} width="30" height="20" />
        <object id="plus-icon" data={plus} width="30" height="20" />
        <object id="user-icon" data={user} width="30" height="20" />
      </div>
    </nav>
  );
};

export default NavBar;
