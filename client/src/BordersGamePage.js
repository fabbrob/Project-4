import React, { useState, useEffect } from "react";
import GuessField from "./GuessField";
import FinishedPage from "./FinishedPage";
import { toBordersPage, convertSecondsToTimer } from "./Helpers";
import CountryData from "./CountryData";
import BorderAnswerField from "./BorderAnswerField";

//helpers
const getCountriesWithBorders = () => {
  return CountryData.filter((country) => country.borders.length > 0);
};

const getRandomisedCountries = () => {
  return getCountriesWithBorders().sort((a, b) => 0.5 - Math.random());
};
const randomisedCountries = getRandomisedCountries();

const getAnswerObjects = (borders) => {
  return borders.map(() => {
    return {
      attempt: "",
      state: "unanswered",
    };
  });
};

const BordersGamePage = (props) => {
  const [timer, setTimer] = useState(0);
  const [finalTimer, setFinalTimer] = useState(0);
  const [guess, setGuess] = useState("");
  const [countries, setCountries] = useState(randomisedCountries);
  const [index, setIndex] = useState(0);
  const [borders, setBorders] = useState(randomisedCountries[index]?.borders);
  const [answers, setAnswers] = useState(getAnswerObjects(borders));
  const [answerIndex, setAnswerIndex] = useState(0);
  const [result, setResult] = useState("unanswered");
  const [amountCorrect, setAmountCorrect] = useState(0);

  //useEffect on every increment of the timer
  useEffect(() => {
    //if game not finished
    if (index < countries.length) {
      //every seconds, add 1 to the timer
      setTimeout(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      //   //keep the other data the same
      //   setGuess(guess);
      //   setCountries(countries);
      //   setIndex(index);
      //   setBorders(borders);
      //   setAnswers(answers);
      //   setAnswerIndex(answerIndex);
      //   setAmountCorrect(amountCorrect);
    }
  }, [timer]);

  useEffect(() => {
    if (index < countries.length) {
      //reset borders to new country
      setBorders(countries[index].borders);
      //reset answers
      setAnswers(getAnswerObjects(countries[index].borders));
      //reset answer index
      setAnswerIndex(0);
    }
  }, [index]);

  const handleInputChange = (event) => {
    setGuess(event.target.value.slice(0, 24));
  };

  const inputEntered = (event) => {
    //if user entered
    if (event.keyCode === 13) {
      //save the timer on enter
      setFinalTimer(timer);
      //check whether the user answer is found and not already answered (i.e. correct)
      const borderFound = borders.includes(guess.toLowerCase());
      const borderUnanswered = answers.find(
        (answer) => answer.attempt === guess.toLowerCase()
      );

      //if answer is correct
      if (borderFound && borderUnanswered === undefined) {
        //display as correct
        setResult("correct");
        //increment amount correct
        setAmountCorrect(amountCorrect + 1);
        //change the answer box to the users guess
        const updatedAnswers = [...answers];
        updatedAnswers[answerIndex].attempt = guess.toLowerCase();
        updatedAnswers[answerIndex].state = "correct";
        setAnswers(updatedAnswers);
        //reset to base after 1 second
        setTimeout(() => {
          setGuess("");
          setResult("unanswered");
          //if this guess was not the users last attempt
          if (answerIndex + 1 < answers.length) {
            setAnswerIndex(answerIndex + 1);
          } else {
            //go to next country
            setIndex(index + 1);
          }
        }, 1000);
      } //else if incorrect
      else {
        //display as incorrect
        setResult("incorrect");
        //change the answer box to the users guess
        const updatedAnswers = answers;
        updatedAnswers[answerIndex].attempt = guess.toLowerCase();
        updatedAnswers[answerIndex].state = "incorrect";
        setAnswers(updatedAnswers);

        //reset to base after 2seconds
        setTimeout(() => {
          setGuess("");
          setResult("unanswered");
          //if this guess was not the users last attempt
          if (answerIndex + 1 < answers.length) {
            setAnswerIndex(answerIndex + 1);
          } else {
            //go to next country
            setIndex(index + 1);
          }
        }, 2000);
      }
    }
  };

  if (index < countries.length) {
    return (
      <div className="gamePage">
        <h1>Borders</h1>
        <p className="timer">{convertSecondsToTimer(timer)}</p>
        <p className="giveUp" onClick={toBordersPage}>
          Give Up?
        </p>
        <p className="bordersToGuess">{countries[index].name}</p>
        <div className="borders">
          {answers.map((answer, idx) => {
            return (
              <BorderAnswerField
                attempt={answer.attempt}
                state={answer.state}
                key={idx}
              />
            );
          })}
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
        length={randomisedCountries.reduce(
          (acc, country) => acc + country.borders.length,
          0
        )}
        timer={finalTimer}
      />
    );
  }
};

export default BordersGamePage;
