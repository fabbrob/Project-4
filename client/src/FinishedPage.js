import React from "react";
import { toCountriesPage, toCapitalsPage, toBordersPage,toFlagsPage, convertSecondsToTimer } from "./Helpers";

const FinishedPage = (props) => {

  const location = window.location.pathname;
  let gameType;
  let linkFunc;

  if(location.includes("countries")){
    gameType = "countries";
    linkFunc = toCountriesPage;
  } else if(location.includes("flags")){
    gameType = "flags";
    linkFunc = toFlagsPage;
  }else if(location.includes("capitals")){
    gameType = "capitals";
    linkFunc = toCapitalsPage;
  }else if(location.includes("borders")){
    gameType = "borders";
    linkFunc = toBordersPage;
  }

  return (
    <div className="finishedPage">
      <h1>{gameType}</h1>
      <p className="finishedTitle">Game Finished</p>
      <p className="finishedScore">
        SCORE: {props.amountCorrect} / {props.length}
      </p>
      <p className="finishedTime">TIME: {convertSecondsToTimer(props.timer)}</p>
      <div className="backButton" onClick={linkFunc}>
        <p>Back</p>
      </div>
    </div>
  );
};

export default FinishedPage;