import React from "react";

const CountriesInformationDisplay = (props) => {
    return (
        <>
            <div className="shapeContainer">
                <img src={`/images/countries/${props.abbr}/512.png`} className="shape" alt="countryToGuess"></img>
            </div>
            <p className="answerReveal">{props.answer}</p>
        </>
    );
}

export default CountriesInformationDisplay;