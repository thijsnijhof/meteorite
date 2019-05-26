import React from 'react';
import './Search.css';

const Search = ({value, onChange}) => {
  return (
    <div className="navbar-item">
      <input className="input is-primary" placeholder="Search for meteorites..." type="search" onChange={onChange} value={value}/>
    </div>
  )
}

export default Search;
