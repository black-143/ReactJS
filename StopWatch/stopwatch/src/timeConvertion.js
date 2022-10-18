const timeConvertion = () => {
  let milliseconds = 3000;
  let seconds = milliseconds / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds + ":";
};
