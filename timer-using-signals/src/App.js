import "./styles.css";
import { useSignal } from "@preact/signals-react";

export default function App() {
  const time = useSignal(0);
  const interValid = useSignal(null);
  const isRunning = useSignal(false);

  const handleTimer = (action) => {
    if (action == "start") {
      interValid.value = setInterval(() => {
        time.value++;
      }, 1000);
      isRunning.value = true;
    } else if (action == "stop") {
      clearInterval(interValid.value);
      interValid.value = null;
    } else if (action == "reset") {
      clearInterval(interValid.value);
      interValid.value = null;
      time.value = 0;
      isRunning.value = false;
    }
  };
  const formatTime = () => {
    const hours = Math.floor(time.value / 3600);
    const minutes = Math.floor((time.value % 3600) / 60);
    const seconds = time.value % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <h3>Stopwatch</h3>
      <p>{formatTime()}</p>

      <button disabled={isRunning.value} onClick={() => handleTimer("start")}>
        Start
      </button>
      <button onClick={() => handleTimer("stop")}>stop</button>
      <button onClick={() => handleTimer("reset")}>reset</button>
    </div>
  );
}
