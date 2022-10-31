import React, { useState, useEffect } from "react";
import GuessField from "../components/GuessField";
import BorderAnswerField from "../components/BorderAnswerField";
import FinishedPage from "../pages/FinishedPage";
import {
  toCountriesPage,
  toCapitalsPage,
  toBordersPage,
  toFlagsPage,
  convertSecondsToTimer,
} from "../helpers/Helpers";
import CountryData from "../CountryData";

//boolean for to determine page
const isBordersGame = window.location.pathname.includes("borders");
const isCapitalsGame = window.location.pathname.includes("capitals");
const isCountriesGame = window.location.pathname.includes("countries");
const isFlagsGame = window.location.pathname.includes("flags");

//helpers
const createAttemptObjects = (borders) => {
  return borders.map((border) => {
    return {
      attempt: "",
      answer: border,
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

const getRandomisedCountries = () => {
  return getCountries.sort((a, b) => 0.5 - Math.random());
};

const countries = getRandomisedCountries();

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
  //state variable for borders page
  const [borders, setBorders] = useState(countries[countryIndex]?.borders);
  const [attempts, setAttempts] = useState(createAttemptObjects(borders));
  const [attemptIndex, setAttemptIndex] = useState(0);

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
      setAnswers(createAttemptObjects(borders));
      //reset answer index
      setAnswerIndex(0);
    }
  }, [borders]);

  //helper functions

  //checks if the submitted guess is an attempt
  const isAnswerCorrect = () => {
    if (isBordersGame) {
      const borderFound = borders.includes(guess.toLowerCase());
      const borderUnanswered = answers.find(
        (answer) => answer.attempt === guess.toLowerCase()
      );
      return borderFound && borderUnanswered === undefined;
    } else if (isCapitalsGame) {
      return guess.toLowerCase() === countries[countryIndex].capital;
    } else {
      //countries/flags
      return guess.toLowerCase() === countries[countryIndex].name;
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
  const updateAnswer = () => {
    if (isBordersGame) {
      //update the user's attempts on screen
      const updatedAttempts = attempts;
      updatedAttempts[attemptIndex].attempt = guess.toLowerCase();
      updatedAttempts[attemptIndex].state = "incorrect";
      setAttempts(updatedAttempts);
    } else {
      //set the answer reveal
      setAnswer(getCorrectAnswer());
    }
  };

  //to reset the board after an attempt
  const resetBoard = () => {
    setGuess("");
    setResult("unanswered");
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

      //check answer
      if (isAnswerCorrect()) {
        //if answer correct
        //display as correct
        setResult("correct");
        //increment score
        setAmountCorrect(amountCorrect + 1);
        updateAnswer();
        //reset to base after 1 second
        setTimeout(() => {
          resetBoard();
        }, 1000);
      } else {
        //else if answer incorrect
        //display as incorrect
        setResult("incorrect");
        updateAnswer();
        //reset to base after 2seconds
        setTimeout(() => {
          resetBoard();
        }, 2000);
      }
    }
  };
};

export default GamePage;
