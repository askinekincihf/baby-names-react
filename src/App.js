import React, { useState } from "react";
import './App.css';
import BabyNamesData from "./data/BabyNamesData.json";
import BabyNamesCard from "./BabyNamesCard"
import Search from "./Search"

function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  }

  const babyNames = BabyNamesData.sort((previousName, currentName) => previousName.name.localeCompare(currentName.name));

  const filteredBabyNames = babyNames.filter(baby => baby.name.toUpperCase().includes(searchInput.toUpperCase()))

  return (
    <div>
      <div className="name-container">
        <Search
          babyNames={babyNames}
          searchInput={searchInput}
          handleSearchChange={handleSearchChange}
        />
        {filteredBabyNames.map((babyName, index) => (
          <BabyNamesCard
            key={index}
            babyName={babyName}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
