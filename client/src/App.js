import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='homePage'>
      <img src="/images/logo.png" alt='Geographle Logo'></img>
      <h1>Geograple</h1>
      <h2>Test your geography knowledge</h2>
      <div>
          <img src='logo'></img>
          <p>Title</p>
      </div>
      <div>
          <img src='logo'></img>
          <p>Title</p>
      </div>
      <div>
          <img src='logo'></img>
          <p>Title</p>
      </div>
      <div>
          <img src='logo'></img>
          <p>Title</p>
      </div>
    </div>
  );
}

export default App;
