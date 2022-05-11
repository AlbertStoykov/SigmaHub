import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';




// changed activeClassName since it does not exist after react v6 :D 
const NavBar = () => {
    let navigate = useNavigate()
    // back button - go back one using navigate(-1)
    function goBack() {
        return navigate(-1)
    }

    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/about">About</NavLink>
            <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/search">Search</NavLink>
            <button onClick={goBack}>Back</button>
        </nav>
    );
}

export default NavBar;
