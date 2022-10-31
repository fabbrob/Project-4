import React from "react";
import BorderAnswerField from "./BorderAnswerField";

const BordersInformationDisplay = (props) => {
    return (
        <>
        <p className="bordersToGuess">{props.name}</p>
        <div className="borders">
          {props.attempts.map((attempt, idx) => {
            return (
              <BorderAnswerField
                attempt={attempt.attempt}
                state={attempt.state}
                key={idx}
              />
            );
          })}
        </div>
        </>
    );
}

export default BordersInformationDisplay;