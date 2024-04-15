import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cool Restaurant. All rights reserved.</p>
      <div className="social-links">
        <a href="/facebook" className="social-link">Facebook</a>
        <a href="/twitter" className="social-link">Twitter</a>
        <a href="/instagram" className="social-link">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
