import React from 'react';
import './Progressbar.css';

const Progressbar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      ></div>
    </div>
  );
};

export default Progressbar;
