import React, { useState } from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestions, onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // Call the onSearch function to fetch suggestions
  };

  const handleSelect = (value) => {
    setInputValue(value);
    // Optionally, you can perform additional actions when a suggestion is selected
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
