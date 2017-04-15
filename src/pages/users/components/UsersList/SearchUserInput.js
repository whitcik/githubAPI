import React from 'react';

const SearchUserInput = ({ placeholder, value, handleInputChange }) => {
  return <input placeholder={placeholder}
               value={value}
               onChange={handleInputChange}
               className="search-input pull-right form-control" 
               type="text" />
};

export default SearchUserInput;