import React from 'react';
import './Header.css';

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="logo" onClick={onToggleSidebar}>
        Cool Restaurant
      </div>
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/salads" className="nav-link">Salads</a>
        <a href="/pizzas" className="nav-link">Pizzas</a>
        <a href="/desserts" className="nav-link">Desserts</a>
      </nav>
      {/* SVG user profile icon */}
      <div className="user-profile">
        <svg
          viewBox="0 0 24 24"
          className="profile-icon"
          aria-label="Profile"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
