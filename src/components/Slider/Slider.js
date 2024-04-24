import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      className="slider"
    />
  );
};

export default Slider;
