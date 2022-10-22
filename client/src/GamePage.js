import React, {useState, useEffect} from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const inputEntered = (event) => {
  if (event.keyCode === 13) {
    console.log("enter");
  }
};

const backToPlayPage = () => {
    window.location = "/flags";
}

const convertSecondsToTimer = (secs) => {
    let minutes = Math.floor(secs/60);
    let seconds = secs - (minutes * 60);
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

const GamePage = (props) => {
    const [timer, setTimer] = useState(-1);

useEffect(() => {
    //every seconds, add 1 to the timer
    setTimeout(() => {
        setTimer((timer) => timer + 1);
    }, 1000);
});


  return (
    <div className="gamePage">
      <h1>Flags</h1>
      <p className="timer">{convertSecondsToTimer(timer)}</p>
      <p className="giveUp" onClick={backToPlayPage}>Give Up?</p>
      <span className="fi fi-mw flag"></span>
      <p className="answerReveal"></p>
      <div className="guessField">
        <input className="guessInput" onKeyUp={inputEntered}></input>
        <div className="guessResult">
            <i className="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
