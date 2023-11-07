import React from 'react';
import logo from '../asset/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'; // Import the CSS file for your component

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <img className="nav-bar-logo" src={logo} alt="logo" />
        <ul className="nav-bar-list">
          <li>
            <Link to="/" className="nav-bar-list-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-bar-list-item">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
