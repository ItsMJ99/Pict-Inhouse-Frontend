import React from 'react';
import "./Searchbar.css";

const Searchbar = (props) => {
  return (
    <div id="searchbar-btn">
      <input type="text" placeholder={props.placeholder}/>
      <button>{props.name}</button>
    </div>
  )
}

export default Searchbar;
