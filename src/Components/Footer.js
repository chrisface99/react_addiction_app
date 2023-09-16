// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      <div className="footer-info">
        <p>For more information, visit <a href="www.dobrewina.pl">www.example.com</a></p>
        <p>Contact us at <a href="mailto:contact@example.com">contact@example.com</a></p>
      </div>
    </div>
  </footer>
);
};


export default Footer;
