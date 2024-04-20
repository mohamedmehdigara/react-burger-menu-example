import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        // Call onSearch after a short delay to debounce the input
        setTimeout(() => {
            onSearch(value);
        }, 300); // Adjust the delay as needed
    };

    // Handle clearing the search query
    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                aria-label="Search"
            />
            {/* Clear button */}
            {query && (
                <button className="clear-button" onClick={handleClear} aria-label="Clear search">
                    &times;
                </button>
            )}
        </div>
    );
}

export default SearchBar;
