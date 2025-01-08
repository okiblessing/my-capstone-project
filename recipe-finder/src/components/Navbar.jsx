import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Recipe Finder</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">Home</Link>  {/* Apply className here */}
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
