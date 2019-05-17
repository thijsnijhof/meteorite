import React from 'react';
import './Search.css';

const Search = ({value, onChange}) => {
  return (
    <div>
      <input type="search" onChange={onChange} value={value}/>
    </div>
  )
}

export default Search;
