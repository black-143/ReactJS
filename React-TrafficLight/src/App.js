import "./styles.css";
import React, { useState, useEffect } from "react";

const lightConfig = {
  red: {
    next: "yellow",
    duration: 4000
  },
  yellow: {
    next: "green",
    duration: 5000
  },
  green: {
    next: "red",
    duration: 3000
  }
};

export default function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setLight(lightConfig[light].next);
    }, lightConfig[light].duration);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light == "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light == "yellow" ? "active" : ""}`}
      ></div>

      <div className={`light green ${light == "green" ? "active" : ""}`}></div>
    </div>
  );
}
