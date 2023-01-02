import { Routes, Route, BrowserRouter } from "react-router-dom";
import AskWords from "./companents/AskWord";
import AddWords from "./companents/AddNewWord";
import Home from "./companents/Home";
import "./index.scss"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/askWords" element={<AskWords/>} />
          <Route path="/addWords" element={<AddWords/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
