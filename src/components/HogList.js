import React from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs, onGreasedChange, onSortChange }) => {
  return (
    <div>
      {/* Add filter and sort components */}
      {/* Call the onGreasedChange and onSortChange callbacks when appropriate */}
      {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))}
    </div>
  );
};

export default HogList;
