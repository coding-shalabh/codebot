import React from 'react';
import Codebot from '../assets/Codebot.png';
import { NavLink } from 'react-router-dom';



const NavBar = () => {


  const linkedIn = "https://www.linkedin.com/in/shalabh-dev/"

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"> <img src={Codebot} alt="codebot" /></NavLink>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <span className="navbar-text">
          made with Love ❤️ by <b><NavLink to={linkedIn}>Shalabh Gupta</NavLink></b>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default NavBar