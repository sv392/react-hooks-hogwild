import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"; // Import the new components you'll create

import hogs from "../porkers_data";

function App() {
  const [hogsData, setHogsData] = useState(hogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState(""); // Can be 'name' or 'weight'

  const handleGreasedChange = () => {
    setShowGreasedOnly(!showGreasedOnly);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // Filter and sort the hogs based on state
  const filteredAndSortedHogs = hogsData
    .filter((hog) => (!showGreasedOnly || hog.greased))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      {/* Pass the necessary props to the HogList component */}
      <HogList
        hogs={filteredAndSortedHogs}
        onGreasedChange={handleGreasedChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
}

export default App;
