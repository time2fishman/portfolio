import React, { useState, useEffect } from 'react';
import logo from '../../img/adam-logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  // STATE
  const [spin, setSpin] = useState(false)
  // const [position, setPosition] = useState({
  //   left: 0,
  //   top: 0
  // });

  const spinLogo = () => {
    setSpin(true)
    setTimeout(() => setSpin(false), 1000)
  }

  return (
    <div>
      <header className="header">
        {/* Logo */}
        <img className={`logo ${spin ? 'spin' : null}`} src={logo} onDoubleClick={spinLogo} alt="My personal logo" />
        <nav>
          <ul role="menubar" className="navigation-list">
            <li className="nav-list" role="presentation">
              {/* Home page link */}
              <Link to="/home" role="menuitem" className="navigation-list__item navigation-list__item--active">Home</Link>
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
    </div>
  );
};

export default Navbar;