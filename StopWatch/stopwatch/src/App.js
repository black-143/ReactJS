import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPause(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(increment.current);
    setIsPause(false);
  };
  const handleReset = () => {
    clearInterval(increment.current);
    setTimer(0);
    setIsPause(false);
    setIsActive(false);
  };
  const handleResume = () => {
    setIsPause(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="App">
      <h1>React Stopwatch</h1>
      <div className="outerbox">
        <p>{formatTime()}</p>
        <div className="actions">
          {!isActive && !isPause ? (
            <button onClick={handleStart}>Start</button>
          ) : isPause ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
