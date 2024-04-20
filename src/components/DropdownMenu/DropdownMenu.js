import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';

function DropdownMenu({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-trigger" onClick={toggleDropdown}>
        {trigger}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}

DropdownMenu.propTypes = {
  trigger: PropTypes.node.isRequired, // Accepts any valid React node as the trigger
  children: PropTypes.node.isRequired, // Accepts any valid React node as the dropdown content
};

export default DropdownMenu;
