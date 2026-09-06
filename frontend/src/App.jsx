import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Drinks from "./pages/drinks/Drinks";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
