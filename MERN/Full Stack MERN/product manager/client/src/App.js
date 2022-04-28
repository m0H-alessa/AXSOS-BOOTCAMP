import "./App.css";
import Main from "./views/Main";
import ListItems from "./views/ListItems";
import ItemDetails from "./views/ItemDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/api" element={<ListItems />} />
          <Route path="/details/:id" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
