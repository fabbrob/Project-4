import React from "react";

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
        <div className="gameTab">
          <div>
            <i className="fa-solid fa-earth-americas icon"></i>
          </div>
          <div>
            <p>Countries</p>
          </div>
        </div>
        <div className="gameTab">
          <div>
            <i className="fa-solid fa-flag icon"></i>
          </div>
          <div>
            <p>Flags</p>
          </div>
        </div>
        <div className="gameTab">
          <div>
            <i className="fa-solid fa-building-columns icon"></i>
          </div>
          <div>
            <p>Capitals</p>
          </div>
        </div>
        <div className="gameTab">
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