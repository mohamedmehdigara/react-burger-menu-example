import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

function MenuItem({ label, href, onClick, icon, isActive }) {
  // Determine the class name based on whether the menu item is active
  const className = isActive ? 'menu-item active' : 'menu-item';

  // Event handler for keyboard accessibility
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="menuitem"
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      tabIndex={0}
    >
      {/* Optional: Display an icon if provided */}
      {icon && <span className="menu-icon">{icon}</span>}
      {/* Menu item label */}
      <span className="menu-label">{label}</span>
    </a>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
  onClick: () => {},
  icon: null,
  isActive: false,
};

export default MenuItem;
