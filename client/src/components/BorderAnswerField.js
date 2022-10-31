import React from "react";

const BorderAnswerField = (props) => {
  if (props.state === "unanswered") {
    return <div className="border unanswered"></div>;
  } else {
    return (
      <div className={`border ${props.state}`}>
        <div></div>
        <div className="borderGuess">{props.attempt}</div>
        <div className="guessResult">
          {props.state === "correct" && <i className="fa-solid fa-check"></i>}
          {props.state === "incorrect" && <i className="fa-solid fa-xmark"></i>}
        </div>
      </div>
    );
  }
};

export default BorderAnswerField;
