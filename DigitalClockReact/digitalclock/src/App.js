import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="App">
      <h2>Digital Clock</h2>
      <span className="time">{date.toLocaleTimeString()}</span>
    </div>
  );
}
