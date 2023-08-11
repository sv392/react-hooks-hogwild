import React, { useState } from "react";

const HogCard = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <div className="header">{hog.name}</div>
        <button onClick={handleToggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {/* Display additional details when showDetails is true */}
        {showDetails && (
          <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HogCard;
