import React from "react";

const Sort = ({ onSortChange }) => {
  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
