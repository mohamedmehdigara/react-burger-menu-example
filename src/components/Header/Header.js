import React, { useState } from 'react';
import './Header.css';

function Header({ onToggleSidebar }) {
    // State for managing the mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            {/* Logo section */}
            <div className="logo" onClick={onToggleSidebar} aria-label="Cool Restaurant">
                Cool Restaurant
            </div>

            {/* Hamburger menu icon for mobile view */}
            <div
                className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={handleToggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span />
                <span />
                <span />
            </div>

            {/* Navigation menu */}
            <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="/" className="nav-link" aria-label="Home">
                    {/* Optional: Add home icon here */}
                    Home
                </a>
                <a href="/salads" className="nav-link" aria-label="Salads">
                    {/* Optional: Add salads icon here */}
                    Salads
                </a>
                <a href="/pizzas" className="nav-link" aria-label="Pizzas">
                    {/* Optional: Add pizzas icon here */}
                    Pizzas
                </a>
                <a href="/desserts" className="nav-link" aria-label="Desserts">
                    {/* Optional: Add desserts icon here */}
                    Desserts
                </a>
            </nav>

            {/* Search bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    className="search-input"
                />
            </div>

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
