import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Make sure to import your CSS

const Navbar = () => {
  // State to manage the dropdown menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Function to close the dropdown when a link is clicked
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">KitchenHelper</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links-desktop">
        <ul>
          <li>
            <Link className="nav-link" to="/" onClick={closeDropdown}>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/recipes" onClick={closeDropdown}>Recipes</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about" onClick={closeDropdown}>About</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu" onClick={toggleDropdown}>
        Menu
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link className="nav-link" to="/" onClick={closeDropdown}>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/recipes" onClick={closeDropdown}>Recipes</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about" onClick={closeDropdown}>About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
