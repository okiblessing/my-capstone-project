import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu open/close

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">KitchenHelper</span>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={isMenuOpen ? "bar active" : "bar"}></span>
        <span className={isMenuOpen ? "bar active" : "bar"}></span>
        <span className={isMenuOpen ? "bar active" : "bar"}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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

