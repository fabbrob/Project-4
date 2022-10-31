import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import CountriesGamePage from "./pages/CountriesGamePage";
import FlagsGamePage from "./pages/FlagsGamePage";
import CapitalsGamePage from "./pages/CapitalsGamePage";
import BordersGamePage from "./pages/BordersGamePage";
//heroku test

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
        <Route path="/borders/play" element={<BordersGamePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;