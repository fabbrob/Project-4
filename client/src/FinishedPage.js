import React from "react";
import { toFlagsPage, convertSecondsToTimer } from "./Helpers";

const FinishedPage = (props) => {
  return (
    <div className="finishedPage">
      <h1>Flags</h1>
      <p className="finishedTitle">Game Finished</p>
      <p className="finishedScore">
        SCORE: {props.amountCorrect} / {props.length}
      </p>
      <p className="finishedTime">TIME: {convertSecondsToTimer(props.timer)}</p>
      <div className="backButton" onClick={toFlagsPage}>
        <p>Back</p>
      </div>
    </div>
  );
};

export default FinishedPage;