import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/countries" element={<p>Countries</p>}></Route>
        <Route path="/flags" element={<p>Flags</p>}></Route>
        <Route path="/capitals" element={<p>Capitals</p>}></Route>
        <Route path="/borders" element={<p>Borders</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
