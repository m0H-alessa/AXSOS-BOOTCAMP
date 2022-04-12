import Boxes from "./components/Boxes";
import Form from "./components/form";
import "./App.css";
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);

  const createBox = (color, dim) => {
    setBoxes([...boxes, { color, dim }]);
  };

  return (
    <div className="App">
      <Form onNewBox={createBox} />
      <Boxes boxes={boxes} />
    </div>
  );
}

export default App;