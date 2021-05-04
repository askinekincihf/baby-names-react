import './App.css';
import BabyNamesData from "./data/BabyNamesData.json";
import BabyNamesCard from "./BabyNamesCard"

function App() {
  const babyNames = BabyNamesData.sort((previousName, currentName) => previousName.name.localeCompare(currentName.name));

  console.log(babyNames);

  return (
    <div>
      <div className="name-container">
        {babyNames.map((babyName, index) => (
          <BabyNamesCard key={index} babyName={babyName} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
