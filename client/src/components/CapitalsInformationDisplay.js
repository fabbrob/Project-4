import React from "react";

const CapitalsInformationDisplay = (props) => {
    return (
        <div className='capital'>
            <p className="capitalToGuess">{props.name}</p>
            <p className="capitalReveal">{props.answer}</p>
        </div>
    );
}

export default CapitalsInformationDisplay;