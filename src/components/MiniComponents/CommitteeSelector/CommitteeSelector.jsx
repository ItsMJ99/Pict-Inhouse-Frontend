import React from 'react'
import "./CommitteeSelector.css";

const CommitteeSelector = () => {
  return (
    <div id="committeeSelector">
        <select >
        <option hidden>{"\u00A0\u00A0\u00A0\u00A0Selected committee name"}</option>
        <option>Elevate Committee</option>
        <option>Addiction Committee</option>
        <option>Inc Committee</option>
      </select>
      <button>Edit</button>
    </div> 
  )
}

export default CommitteeSelector;