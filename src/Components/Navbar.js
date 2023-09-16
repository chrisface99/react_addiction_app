// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='https://pisf.pl/wp-content/uploads/2021/04/PISF_log1eng_neg.png' style={{ width: '40%' }} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="contact.html">Home</a></li>
        <li><a href="contact.html">About</a></li>
        <li><a href="contact.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
