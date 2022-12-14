import React, { useState, useEffect, useRef } from "react";
import GuessField from "../components/GuessField";
import FinishedPage from "../pages/FinishedPage";
import { toPlayPage, convertSecondsToTimer, getQL } from "../helpers/Helpers";
import BordersInformationDisplay from "../components/BorderInfomationDisplay";
import CapitalsInformationDisplay from "../components/CapitalsInformationDisplay";
import CountriesInformationDisplay from "../components/CountriesInformationDisplay";
import FlagsInformationDisplay from "../components/FlagsInformationDisplay";
import CountryData from "../CountryData";

//boolean for to determine page
const isBordersGame = window.location.pathname.includes("borders");
const isCapitalsGame = window.location.pathname.includes("capitals");
const isCountriesGame = window.location.pathname.includes("countries");
const isFlagsGame = window.location.pathname.includes("flags");

//variables for local storage settings
const questionLength = getQL()
console.log('on load', CountryData)

//helpers
const createAttemptObjects = (borders) => {
  return borders.map((border) => {
    return {
      attempt: "",
      state: "unanswered",
    };
  });
};

const getCountries = () => {
  if (isBordersGame) {
    return CountryData.filter((country) => country.borders.length > 0);
  } else {
    return CountryData;
  }
};

const getRandomisedCountries = (limit) => {
  if(limit) {
  const countries = getCountries().sort((a, b) => 0.5 - Math.random());
  return countries.slice(0, limit)
  } else {
    return getCountries().sort((a, b) => 0.5 - Math.random());
  }
}

const countries = getRandomisedCountries(questionLength);
console.log('after randomising', CountryData)

//component
const GamePage = (props) => {
  //state variables
  const [timer, setTimer] = useState(0);
  const [finalTimer, setFinalTimer] = useState(0);
  const [guess, setGuess] = useState("");
  const [countryIndex, setCountryIndex] = useState(0);
  const [result, setResult] = useState("unanswered");
  const [answer, setAnswer] = useState("");
  const [amountCorrect, setAmountCorrect] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(false);
  //state variable for borders page
  const [borders, setBorders] = useState(countries[countryIndex]?.borders);
  const [attempts, setAttempts] = useState(createAttemptObjects(borders));
  const [attemptIndex, setAttemptIndex] = useState(0);
  const inputFocus = useRef();
  
  //useEffect on every increment of the timer
  useEffect(() => {
    //if game not finished
    if (countryIndex < countries.length) {
      //every seconds, add 1 to the timer
      setTimeout(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  }, [timer]);

  //to keep the guess field onFocus
  useEffect(() => {
    inputFocus?.current?.focus();
  });

  //to update borders
  useEffect(() => {
    if (countryIndex < countries.length) {
      //reset borders to new country
      setBorders(countries[countryIndex].borders);
    }
  }, [countryIndex]);

  useEffect(() => {
    //to reset answers
    if (countryIndex < countries.length) {
      //reset answers
      setAttempts(createAttemptObjects(borders));
      //reset answer index
      setAttemptIndex(0);
    }
  }, [borders]);

  //helper functions

  //checks to see if guess exists in borders
  const existsInBorders = (userGuess) => {
    for (let borderNames of borders) {
      if (borderNames.includes(userGuess)) {
        return true;
      }
    }
    return false;
  };

  //gets offical answer of a correct guess in borders
  const getOfficialAnswer = (userGuess) => {
    for (let borderNames of borders) {
      if (borderNames.includes(userGuess)) {
        return borderNames[0];
      }
    }
    return "doesn't exist";
  }

  //checks if the submitted guess is an attempt
  const isAnswerCorrect = () => {
    const userGuess = guess.trim();
    if (isBordersGame) {
      //is the userGuess correct
      const borderFound = existsInBorders(userGuess.toLowerCase());
      //compare whether the user guess and the attempt exist in the same array in borders (i.e. is the border unanswered)
      let borderUnanswered = true;
      for (let attempt of attempts) {
        for (let borderNames of borders) {
          if (
            borderNames.includes(attempt.attempt) &&
            borderNames.includes(userGuess.toLowerCase())
          ) {
            borderUnanswered = false;
          }
        }
      }
      return borderFound && borderUnanswered;
    } else if (isCapitalsGame) {
      return countries[countryIndex].capitals.includes(userGuess.toLowerCase());
    } else {
      //countries/flags
      return countries[countryIndex].names.includes(userGuess.toLowerCase());
    }
  };

  //gets the correct answer
  const getCorrectAnswer = () => {
    if (isCapitalsGame) {
      return countries[countryIndex].capital;
    } else {
      //countries/flags
      return countries[countryIndex].name;
    }
  };

  //updates answer/attempts
  const updateAnswer = (isCorrect) => {
    if (isBordersGame) {
      //update the user's attempts on screen
      const userGuess = guess.trim();
      const updatedAttempts = attempts;
      isCorrect
        ? (updatedAttempts[attemptIndex].attempt = getOfficialAnswer(userGuess.toLowerCase()))
        : (updatedAttempts[attemptIndex].attempt = userGuess.toLowerCase());
      isCorrect
        ? (updatedAttempts[attemptIndex].state = "correct")
        : (updatedAttempts[attemptIndex].state = "incorrect");
      setAttempts(updatedAttempts);
    } else {
      //set the answer reveal
      setAnswer(getCorrectAnswer());
    }
  };

  //to get the total guesses
  const getTotalAnswers = () => {
    if (isBordersGame) {
      return countries.reduce(
        (acc, country) => acc + country.borders.length,
        0
      );
    } else {
      return countries.length;
    }
  };

  //to reset the board after an attempt
  const resetBoard = () => {
    setGuess("");
    setResult("unanswered");
    setInputDisabled(false);
    if (isBordersGame) {
      if (attemptIndex + 1 < attempts.length) {
        setAttemptIndex(attemptIndex + 1);
      } else {
        //go to next country
        setCountryIndex(countryIndex + 1);
      }
    } else {
      setAnswer("");
      setCountryIndex(countryIndex + 1);
    }
  };

  //function to handle user input
  const handleInputChange = (event) => {
    setGuess(event.target.value.slice(0, 32));
  };

  //function to handle user entering
  const inputEntered = (event) => {
    //if user entered
    if (event.keyCode === 13) {
      //save the timer on enter
      setFinalTimer(timer);
      //disable the guess field
      setInputDisabled(true);
      //check answer
      if (isAnswerCorrect()) {
        //if answer correct
        //display as correct
        setResult("correct");
        //increment score
        setAmountCorrect(amountCorrect + 1);
        updateAnswer(true);
        //reset to base after 1 second
        setTimeout(() => {
          resetBoard();
        }, 1000);
      } else {
        //else if answer incorrect
        //display as incorrect
        setResult("incorrect");
        updateAnswer(false);
        //reset to base after 2seconds
        setTimeout(() => {
          resetBoard();
        }, 2000);
      }
    }
  };

  if (countryIndex < countries.length) {
    return (
      <div className="gamePage">
        {isBordersGame && <h1>Borders</h1>}
        {isCapitalsGame && <h1>Capitals</h1>}
        {isCountriesGame && <h1>Countries</h1>}
        {isFlagsGame && <h1>Flags</h1>}
        <p className="timer">{convertSecondsToTimer(timer)}</p>
        <p className="giveUp" onClick={toPlayPage}>
          Give Up?
        </p>
        {isBordersGame && (
          <BordersInformationDisplay
            name={countries[countryIndex].name}
            attempts={attempts}
          />
        )}
        {isCapitalsGame && (
          <CapitalsInformationDisplay
            name={countries[countryIndex].name}
            answer={answer}
          />
        )}
        {isCountriesGame && (
          <CountriesInformationDisplay
            abbr={countries[countryIndex].abbr}
            answer={answer}
          />
        )}
        {isFlagsGame && (
          <FlagsInformationDisplay
            abbr={countries[countryIndex].abbr}
            answer={answer}
          />
        )}
        <GuessField
          handleInputChange={handleInputChange}
          inputEntered={inputEntered}
          guess={guess}
          result={result}
          disabled={inputDisabled}
          focus={inputFocus}
        />
      </div>
    );
  } else {
    return (
      <FinishedPage
        amountCorrect={amountCorrect}
        length={getTotalAnswers()}
        timer={finalTimer}
      />
    );
  }
};

export default GamePage;
