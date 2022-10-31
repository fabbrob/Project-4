import React from "react";
import HomePageButton from "../components/HomePageButton";

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
        <HomePageButton name='countries'/>
        <HomePageButton name='flags'/>
        <HomePageButton name='capitals'/>
        <HomePageButton name='borders'/>
      </div>
    );
}

export default HomePage;