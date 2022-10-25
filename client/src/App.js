import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";
import CountriesGamePage from "./CountriesGamePage";
import FlagsGamePage from "./FlagsGamePage";
import CapitalsGamePage from "./CapitalsGamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/countries" element={<PlayPage/>}></Route>
        <Route path="/flags" element={<PlayPage/>}></Route>
        <Route path="/capitals" element={<PlayPage/>}></Route>
        <Route path="/borders" element={<PlayPage/>}></Route>
        <Route path="/countries/play" element={<CountriesGamePage/>}></Route>
        <Route path="/flags/play" element={<FlagsGamePage/>}></Route>
        <Route path="/capitals/play" element={<CapitalsGamePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;