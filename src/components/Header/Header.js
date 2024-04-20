import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../HomeIcon/HomeIcon';
import SaladIcon from '../SaladIcon/SaladIcon';
import PizzaIcon from './PizzaIcon'; // Import your Pizza SVG icon component
import DessertIcon from './DessertIcon'; // Import your Dessert SVG icon component

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
            <Link to="/" className="nav-link" aria-label="Home">
        <HomeIcon /> {/* Your Home SVG icon component */}
        Home
      </Link>
      <Link to="/salads" className="nav-link" aria-label="Salads">
        <SaladIcon /> {/* Your Salad SVG icon component */}
        Salads
      </Link>
      <Link to="/pizzas" className="nav-link" aria-label="Pizzas">
        <PizzaIcon /> {/* Your Pizza SVG icon component */}
        Pizzas
      </Link>
      <Link to="/desserts" className="nav-link" aria-label="Desserts">
        <DessertIcon /> {/* Your Dessert SVG icon component */}
        Desserts
      </Link>
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
