import React from 'react';
import Codebot from '../assets/Codebot.png';
import { NavLink } from 'react-router-dom';



const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"> <img src={Codebot} alt="codebot" /></NavLink>
    </div>
  </nav>
  )
}

export default NavBar