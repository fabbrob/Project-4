import React, { useState, useEffect } from "react";
import GuessField from "./GuessField";
import FinishedPage from "./FinishedPage";
import { toFlagsPage, convertSecondsToTimer} from "./Helpers";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import CountryData from "./CountryData";

//helpers
const getRandomisedCountries = () => {
  return CountryData.sort((a, b) => 0.5 - Math.random());
};

const randomisedCountries = getRandomisedCountries();

//component
const FlagsGamePage = (props) => {
  const [timer, setTimer] = useState(0);
  const [guess, setGuess] = useState("");
  const [countries, setCountries] = useState(randomisedCountries);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("unanswered");
  const [answer, setAnswer] = useState("");
  const [amountCorrect, setAmountCorrect] = useState(0);

  //useEffect on every increment of the timer
  useEffect(() => {
    //if game not finished
    if (index < countries.length) {
      //every seconds, add 1 to the timer
      setTimeout(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      //keep the other data the same
      // setGuess(guess);
      // setCountries(countries);
      // setIndex(index);
      // setAmountCorrect(amountCorrect);
    }
  }, [timer]);

  const handleInputChange = (event) => {
    setGuess(event.target.value.slice(0, 24));
  };

  const inputEntered = (event) => {
    //if user entered
    if (event.keyCode === 13) {
      //if answer is correct
      if (guess.toLowerCase() === countries[index].name) {
        //display as correct
        setResult("correct");
        setAnswer(countries[index].name);
        setAmountCorrect(amountCorrect + 1);
        //reset to base after 1 second
        setTimeout(() => {
          setGuess("");
          setAnswer("");
          setResult("unanswered");
          setIndex(index + 1);
        }, 1000);
      } //else if incorrect
      else {
        //display as incorrect
        setResult("incorrect");
        setAnswer(countries[index].name);
        //reset to base after 2seconds
        setTimeout(() => {
          setGuess("");
          setAnswer("");
          setResult("unanswered");
          setIndex(index + 1);
        }, 2000);
      }
    }
  };

  if (index < countries.length) {
    return (
      <div className="gamePage">
        <h1>Flags</h1>
        <p className="timer">{convertSecondsToTimer(timer)}</p>
        <p className="giveUp" onClick={toFlagsPage}>
          Give Up?
        </p>
        <span
          className={`fi fi-${countries[index].abbr} flag`}
          alt='flagToGuess'
        ></span>
        <p className="answerReveal">{answer}</p>
        <GuessField
          handleInputChange={handleInputChange}
          inputEntered={inputEntered}
          guess={guess}
          result={result}
        />
      </div>
    );
  } else {
    return (
      <FinishedPage
        amountCorrect={amountCorrect}
        length={countries.length}
        timer={timer}
      />
    );
  }
};

export default FlagsGamePage;
