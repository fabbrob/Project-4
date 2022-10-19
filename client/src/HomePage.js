import React from "react";

const toCountries = () => {
    window.location = '/countries';
}
const toFlags = () => {
    window.location = '/flags';
}
const toCapitals = () => {
    window.location = '/capitals';
}
const toBorders = () => {
    window.location = '/borders';
}

const HomePage = (props) => {
    return (
        <div className="homePage">
        <img
          className="logo"
          src="/images/logo.png"
          alt="Geographle Logo"
        ></img>
        <h1>Geographle</h1>
        <h2>Test your geography knowledge!</h2>
        <div className="gameTab" onClick={toCountries}>
          <div>
            <i className="fa-solid fa-earth-americas icon"></i>
          </div>
          <div>
            <p>Countries</p>
          </div>
        </div>
        <div className="gameTab" onClick={toFlags}>
          <div>
            <i className="fa-solid fa-flag icon"></i>
          </div>
          <div>
            <p>Flags</p>
          </div>
        </div>
        <div className="gameTab" onClick={toCapitals}>
          <div>
            <i className="fa-solid fa-building-columns icon"></i>
          </div>
          <div>
            <p>Capitals</p>
          </div>
        </div>
        <div className="gameTab" onClick={toBorders}>
          <div>
            <i className="fa-solid fa-road-barrier icon icon"></i>
          </div>
          <div>
            <p>Borders</p>
          </div>
        </div>
      </div>
    );
}

export default HomePage;