import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <InputGroup className="mb-3 w-60">
      <FormControl
        placeholder="Search by Name or Location"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
