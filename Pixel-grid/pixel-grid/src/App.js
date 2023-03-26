import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedColor, setSelectedColor] = useState();
  const [colors, setColors] = useState(Array.from({ length: 8 }, randomColor));
  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  const handleShuffle = () => {
    const newColors = [...colors].map(randomColor);
    setColors(newColors);
  };
  const handleColorClick = (e) => {
    setSelectedColor(colors[e.target.getAttribute("data-id")]);
  };
  const handleChooseColor = (e) => {
    e.target.style.backgroundColor = selectedColor;
  };
  const handleClearEvent = (e) => {
    const boxes = document.querySelectorAll(".pixelBox");
    boxes.forEach((box) => (box.style.backgroundColor = ""));
  };
  return (
    <div>
      <h2>Pixel Art</h2>
      <div className="container">
        <div className="main-grid">
          {[...Array(64)].map((item, index) => {
            return (
              <>
                <div className="pixelBox" onClick={handleChooseColor}></div>
              </>
            );
          })}
        </div>
        <div className="color-grid">
          {[...Array(8)].map((item, index) => {
            return (
              <>
                <div
                  className="colorBox"
                  data-id={index}
                  style={{ backgroundColor: colors[index] }}
                  onClick={handleColorClick}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <button onClick={handleShuffle}>Shuffle Colors</button>
      <button onClick={handleClearEvent}>Clear Colors</button>
    </div>
  );
}
