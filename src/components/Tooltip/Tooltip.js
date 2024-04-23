import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-content">
        {children}
        <span className="tooltip-text">{text}</span>
      </div>
    </div>
  );
};

export default Tooltip;
