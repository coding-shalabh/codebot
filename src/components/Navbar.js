import React from 'react';
import Codebot from '../assets/Codebot.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"> <img src={Codebot} alt="codebot" /></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <span className="navbar-text">
          made with Love ❤️ by <b>Shalabh Gupta</b>
        </span>
      </div>
    </div>
  </nav>
  )
}

export default NavBar