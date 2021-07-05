import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { FaSearch } from "react-icons/fa";
import './SearchInputElements.css'

function SearchInput({value, onChange}) {
    const [displayValue, setDisplayValue] = useState(value)
    const debounceChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value)
        debounceChange(event.target.value);
    }

  return(
    <div className='search-container'>
      <div className='search-content'>
        <input 
        className='input-search' 
        type='search' 
        value={displayValue} 
        onChange={handleChange} 
        placeholder="Busque por um anime"
        />
        <FaSearch />
      </div>
    </div>
    
  );
}

export default SearchInput;