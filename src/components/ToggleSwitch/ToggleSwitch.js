import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ initialState = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
