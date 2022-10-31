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

export const toGame = () => {
  if (window.location.pathname === "/countries") {
    window.location = "/countries/play";
  } else if (window.location.pathname === "/flags") {
    window.location = "/flags/play";
  } else if (window.location.pathname === "/capitals") {
    window.location = "/capitals/play";
  } else {
    window.location = "/borders/play";
  }
};