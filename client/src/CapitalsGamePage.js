import React, { useState, useEffect } from "react";
import GuessField from "./GuessField";
import FinishedPage from "./FinishedPage";
import { backToCapitalsPage, convertSecondsToTimer} from "./Helpers";
import CountryData from "./CountryData";

//helpers
const getRandomisedCountries = () => {
  return CountryData.sort((a, b) => 0.5 - Math.random());
};

const randomisedCountries = getRandomisedCountries();

//component
const CapitalsGamePage = (props) => {
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
      setGuess(guess);
      setCountries(countries);
      setIndex(index);
      setAmountCorrect(amountCorrect);
    }
  }, [timer]);

  const handleInputChange = (event) => {
    setGuess(event.target.value.slice(0, 24));
  };

  const inputEntered = (event) => {
    //if user entered
    if (event.keyCode === 13) {
      //if answer is correct
      if (guess.toLowerCase() === countries[index].capital) {
        //display as correct
        setResult("correct");
        setAnswer(countries[index].capital);
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
        setAnswer(countries[index].capital);
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
        <p className="giveUp" onClick={backToCapitalsPage}>
          Give Up?
        </p>
        <div className='capital'>
            <p className="capitalToGuess">{countries[index].name}</p>
            <p className="capitalReveal">{answer}</p>
        </div>
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

export default CapitalsGamePage;
