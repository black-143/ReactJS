import { useState } from "react";
import "./styles.css";

export default function App() {
  const [colorChoose, setColorChoose] = useState();

  const handleChange = (e) => {
    setColorChoose(e.target.value);
  };
  return (
    <div className="App">
      <h1>Color selection</h1>
      <input
        type="color"
        className="color"
        value={colorChoose}
        onChange={handleChange}
      />
      <p>{colorChoose}</p>
    </div>
  );
}
