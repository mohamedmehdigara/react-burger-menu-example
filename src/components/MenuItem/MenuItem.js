import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

function MenuItem({ label, href, onClick }) {
  return (
    <a
      href={href}
      className="menu-item"
      onClick={onClick}
      role="menuitem"
      aria-label={label}
    >
      {label}
    </a>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  onClick: () => {},
};

export default MenuItem;
