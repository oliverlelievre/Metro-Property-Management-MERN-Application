import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Property from "./pages/property/Property";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<List />} />
        <Route path="/properties/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
