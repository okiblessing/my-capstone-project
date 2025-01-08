import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">KitchenHelper</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">Home</Link>  
        </li>
        <li>
          <Link className="nav-link" to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
