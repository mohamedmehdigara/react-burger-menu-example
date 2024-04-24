import React, { useState } from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestions, onSearch, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Function to filter suggestions based on input value
  const filterSuggestions = (value) => {
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Function to handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // Call the onSearch function to fetch suggestions
    filterSuggestions(value); // Filter suggestions based on input value
  };

  // Function to handle suggestion selection
  const handleSelect = (value) => {
    setInputValue(value);
    onSelect(value); // Call the onSelect function with the selected value
    setFilteredSuggestions([]); // Clear suggestions after selection
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
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
