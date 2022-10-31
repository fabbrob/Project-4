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
