import React from "react";

const FlagsInformationDisplay = (props) => {
    return (
        <>
        <img
          className="flag"
          src={`/images/flags/${props.abbr}.svg`}
          alt='flagToGuess'
        ></img>
        <p className="answerReveal">{props.answer}</p>
        </>
    );
}

export default FlagsInformationDisplay;