import React, { useState, useEffect } from "react";

export default function ProgressBar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  return (
    <div>
      <h1>ProgressBar</h1>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s"
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      {filled === 100 ? (
        <button
          className="btn"
          onClick={() => {
            setFilled(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Run
        </button>
      )}
    </div>
  );
}
