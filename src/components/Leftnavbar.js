import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Leftnavbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            
            {/* Toggle Button for Leftbar */}
            <button onClick={toggleMenu}>Toggle Menu</button>

            {/* Leftbar */}

            <div className={`offcanvas offcanvas-start ${menu ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="sidebar-label">
                <div className="offcanvas-body">
                <span onClick={toggleMenu}>Close</span>
                <NavLink to="/">Back to homepage</NavLink> 
                
                </div>
            </div>

        </>
    );
}

export default Leftnavbar;

