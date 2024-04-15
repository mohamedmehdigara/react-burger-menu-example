import React, { useState } from 'react';
import './Sidebar.css';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Salads', href: '/salads' },
  { label: 'Pizzas', href: '/pizzas' },
  { label: 'Desserts', href: '/desserts' },
  // Add more menu items as needed
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`sidebar ${isOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <span className="close-button" onClick={handleCloseSidebar}>
          &times;
        </span>
        {menuItems.map((item) => (
          <a
            key={item.href}
            className="sidebar-item"
            href={item.href}
            onClick={handleCloseSidebar}
            role="menuitem"
          >
            {item.label}
          </a>
        ))}
      </div>
      <button onClick={handleToggleSidebar}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </>
  );
}

export default Sidebar;
