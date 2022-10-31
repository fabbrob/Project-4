import React from "react";
import {toHome, toGame} from '../helpers/Helpers';

const PlayPage = (props) => {

  let title;
  if (window.location.pathname === "/countries") {
    title = "Guess the countries by their shape";
  } else if (window.location.pathname === "/flags") {
    title = "Guess the countries by their flags";
  } else if (window.location.pathname === "/capitals") {
    title = "Guess the country by its capital";
  } else {
    title = "Guess the borders of the country";
  }

  return (
    <div className="playPage">
      <div className="gameNav">
        <i className="fa-solid fa-circle-question"></i>
        <i className="fa-solid fa-chart-simple"></i>
        <i className="fa-solid fa-gear"></i>
      </div>
      <h2>{title}</h2>
      <div className="playButton" onClick={toGame}>
        <p>Play</p>
      </div>
      <div className="backToHome" onClick={toHome}>
        <i className="fa-solid fa-house"></i>
        <p>Back To Home</p>
      </div>
    </div>
  );
};

export default PlayPage;
