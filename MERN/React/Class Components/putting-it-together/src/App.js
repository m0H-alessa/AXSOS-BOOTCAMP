import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Armin" lastName="Van Burren" age={45} hairColor="Brown"/>
      <PersonCard firstName="Jehad" lastName="Issa" age={28} hairColor="Black"/>
      <PersonCard firstName="Mahmoud" lastName="Issa" age={33} hairColor="Black"/>
      <PersonCard firstName="Hazem" lastName="Mashaqi" age={20} hairColor="Brown"/>
    </div>
  );
}

export default App;