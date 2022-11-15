import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from "react";
import { toHome, toGame, setQL, getQL } from '../helpers/Helpers';
import CountryData from '../CountryData';

const location = window.location;

const PlayPage = (props) => {

  const [help, setHelp] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settings, setSettings] = useState(false);
  const [questionLength, setQuestionLength] = useState(getQL() || CountryData.length)

  useEffect(() => {
    setQL(questionLength)
  }, [questionLength])

  const settingsToggle = () => {
    setSettings(!settings);
  }

  const closeModal = () => {
    setSettings(false)
    setStatistics(false)
    setHelp(false)
  }

  const handleSliderChange = (event) => {
    setQuestionLength(event.target.value)
  }

  const handleInputChange = (event) => {
    const newInput = event.target.value.replace(/\D/g, '');
    if(parseInt(newInput) < 1 || newInput === ''){
      setQuestionLength(1)
    } else if (parseInt(newInput) > CountryData.length){
      setQuestionLength(CountryData.length)
    } else {
      setQuestionLength(newInput)
    }
  }

  //function to name the title accordingly
  const nameTitle = () => {
    if (location.pathname === "/countries") {
      return "Guess the countries by their shape";
    } else if (location.pathname === "/flags") {
      return "Guess the countries by their flags";
    } else if (location.pathname === "/capitals") {
      return "Guess the country by its capital";
    } else {
      return "Guess the borders of the country";
    }
  }

  return (
    <div className="playPage">
      <div className="gameNav">
        <i className="fa-solid fa-circle-question"></i>
        <i className="fa-solid fa-chart-simple"></i>
        <i className="fa-solid fa-gear" onClick={settingsToggle}></i>
      </div>
      {!help && !statistics && !settings ?
        <>
          <h2>{nameTitle()}</h2>
          <div className="playButton" onClick={toGame}>
            <p>Play</p>
            </div>
        <div className="backToHome" onClick={toHome}>
            <i className="fa-solid fa-house"></i>
            <p>Back To Home</p>
          </div>
        </>
        :
        <div className='modal'>
          <div className='closeButton' onClick={closeModal}>
            <i className='fa-solid fa-xmark exit'></i>
          </div>
          <div className='modalContent'>
            <p>Set the amount of countries to play</p>
            <input className='modalInput' type='text' value={questionLength} onChange={handleInputChange}></input>
            <div className='slider'>
              <Slider sx={{ color: 'black' }} value={parseInt(questionLength)} onChange={handleSliderChange} min={1} max={CountryData.length} />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default PlayPage;
