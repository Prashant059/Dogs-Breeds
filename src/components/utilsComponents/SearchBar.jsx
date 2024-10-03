import React, { useState } from 'react';

const SearchBar = React.memo(({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchTerm(inputValue); 
  };

  return (
    <div className="flex justify-end items-center mb-4 mt-2 space-x-2">
      <input
        type="text"
        placeholder="Search for a breed..."
        className="border rounded-full p-4 w-full text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
});

export default SearchBar;
