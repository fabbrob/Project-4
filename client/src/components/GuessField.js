import React from "react";

const GuessField = (props) => {
  return (
    <div className={`guessField ${props.result}`}>
      <div>
      </div>
      <input
        className="guessInput"
        onChange={props.handleInputChange}
        onKeyUp={props.inputEntered}
        value={props.guess}
        disabled={props.disabled}
      ></input>
      <div className="guessResult">
        {props.result==='correct' && <i className="fa-solid fa-check"></i>}
        {props.result==='incorrect' && <i className="fa-solid fa-xmark"></i>}
      </div>
    </div>
  );
};

export default GuessField;
