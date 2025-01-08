import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle the search when 'Enter' key is pressed
  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        {/* Material Icon */}
        <i className="material-icons">search</i>
        <input
          type="text"
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          onKeyDown={handleSearch} 
        />
      </div>
    </div>
  );
};

export default SearchBar;
