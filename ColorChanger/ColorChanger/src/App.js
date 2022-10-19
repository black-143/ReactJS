import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");

  const handleColorChange = () => {
    let ColorCode =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    setColor(ColorCode);
    //console.log(ColorCode)
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: color
      }}
    >
      <p>{color}</p>
      <button onClick={handleColorChange} className="generate">
        Generate
      </button>
    </div>
  );
}
