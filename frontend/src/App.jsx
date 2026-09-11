import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Drinks from "./pages/drinks/Drinks";
import DrinkPage from "./pages/drink/DrinkPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/drinks/:drinkName" element={<DrinkPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
