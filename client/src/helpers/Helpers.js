export const convertSecondsToTimer = (secs) => {
  let minutes = Math.floor(secs / 60);
  let seconds = secs - minutes * 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

//window directs
export const toFlagsPage = () => {
  window.location = "/flags";
};

export const toCapitalsPage = () => {
  window.location = "/capitals";
};

export const toCountriesPage = () => {
  window.location = "/countries";
};

export const toBordersPage = () => {
  window.location = "/borders";
};

export const toHome = () => {
  window.location = "/";
};

export const toPlayPage = () => {
  if (window.location.pathname.includes("/countries")) {
    window.location = "/countries";
  } else if (window.location.pathname.includes("/flags")) {
    window.location = "/flags";
  } else if (window.location.pathname.includes("/capitals")) {
    window.location = "/capitals";
  } else {
    window.location = "/borders";
  }
};

export const toGame = () => {
  if (window.location.pathname.includes("/countries")) {
    window.location = "/countries/play";
  } else if (window.location.pathname.includes("/flags")) {
    window.location = "/flags/play";
  } else if (window.location.pathname.includes("/capitals")) {
    window.location = "/capitals/play";
  } else {
    window.location = "/borders/play";
  }
};

export const setQL = (num) => {
  const settings = localStorage.settings;
  const value = `${num}`
  if(settings){
    const updatedSettings = JSON.parse(localStorage.settings);
    updatedSettings.questionLength = value;
    localStorage.settings = JSON.stringify(updatedSettings);
  } else {
    localStorage.settings = JSON.stringify({questionLength: value})
  }
}

export const getQL = () => {
  const settings = localStorage.settings;
  if(settings){
  const data = JSON.parse(settings)
  if(data.questionLength){
    return parseInt(data.questionLength)
  }
}
    return undefined
}