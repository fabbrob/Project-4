import React from "react";

const CountriesInformationDisplay = (props) => {
    return (
        <>
        <img src={`/images/countries/${props.abbr}/512.png`} className="shape" alt="countryToGuess"></img>
        <p className="answerReveal">{props.answer}</p>
        </>
    );
}

export default CountriesInformationDisplay;