import React from 'react';
import "../assets/css/SearchBox.css";


export default function SearchBar(props){
  const {handleSearch, value} = props;
  return (
    <div className='search-bar-container'>
      <input className='search-bar' type="text" placeholder='Search Product' onInput={(e)=>handleSearch(e)} value={value} />
    </div>
  );
}