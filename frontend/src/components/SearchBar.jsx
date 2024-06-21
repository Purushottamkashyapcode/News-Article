import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-800"
        placeholder="Search for articles..."
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
