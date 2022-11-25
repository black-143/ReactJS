import { useState } from "react";
import "./styles.css";

function Card({ frontSide, backSide }) {
  const [isFront, changeFace] = useState(true);

  function handleClick() {
    changeFace((oldState) => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;
  return (
    <div className={classList} onClick={handleClick}>
      {text}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <h2>Click on a card to reveal the secret solution</h2>

      <Card frontSide="9* 6" backSide="54" />
      <Card frontSide="2**8" backSide="256" />
      <Card frontSide="rabbit" backSide="rabbyte" />
    </div>
  );
}
