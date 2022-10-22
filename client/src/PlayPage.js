import React from "react";

const PlayPage = (props) => {
  const toHome = () => {
    window.location = "/";
  };

  const toGame = () => {
    if (window.location.pathname === "/countries") {
      window.location = "/countries/play";
    } else if (window.location.pathname === "/flags") {
      window.location = "/flags/play";
    } else if (window.location.pathname === "/capitals") {
      window.location = "/capitals/play";
    } else {
      window.location = "/borders/play";
    }
  };

  let title;
  if (window.location.pathname === "/countries") {
    title = "Guess all the countries by their shape";
  } else if (window.location.pathname === "/flags") {
    title = "Guess all the countries by their flags";
  } else if (window.location.pathname === "/capitals") {
    title = "Guess the capitals of all the countries";
  } else {
    title = "Guess every border of all the countries";
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
