import React from "react";

const Filter = ({ showGreasedOnly, onGreasedChange }) => {
  return (
    <div>
      <label>
        Show Greased Hogs:
        <input
          type="checkbox"
          checked={showGreasedOnly}
          onChange={onGreasedChange}
        />
      </label>
    </div>
  );
};

export default Filter;
