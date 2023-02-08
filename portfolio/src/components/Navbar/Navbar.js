// IMPORT CSS
import './Navbar.css'
// IMPORT HOOKS
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// IMPORT IMGS
import logo from '../../img/adam-logo.svg'

const Navbar = () => {
  // STATE
  const [spin, setSpin] = useState(false)
  //FUNCTIONS
  const spinLogo = () => {
    setSpin(true)
    setTimeout(() => setSpin(false), 1000)
  }

  return (
      <header className="header">
        {/* Logo */}
        <img className={`logo ${spin ? 'spin' : null}`} src={logo} onDoubleClick={spinLogo} alt="My personal logo" />
        <nav>
          <ul role="menubar" className="navigation-list">
            <li className="nav-list" role="presentation">
              {/* Home page link */}
              <Link to="/home" role="menuitem" className="navigation-list__item">Home</Link>
            </li>
            <li className="nav-list" role="presentation">
              {/* About page link */}
              <Link to="/about" className="navigation-list__item">About</Link>
            </li>
            <li className="nav-list" role="presentation">
              {/* Resume page link */}
              <Link to="./resume"className="navigation-list__item">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
  
};

export default Navbar;