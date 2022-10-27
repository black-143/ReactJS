import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(1);
  const [secondDice, setSecondDice] = useState(1);
  const [result, setResult] = useState();
  const images = {
    1: "https://www.calculator.net/img/dice1.png",
    2: "https://www.calculator.net/img/dice2.png",
    3: "https://www.calculator.net/img/dice3.png",
    4: "https://www.calculator.net/img/dice4.png",
    5: "https://www.calculator.net/img/dice5.png",
    6: "https://www.calculator.net/img/dice6.png"
  };
  const handleClick = () => {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let sum = num1 + num2;
    setNumber(num1);
    setSecondDice(num2);
    setResult(sum);
  };
  return (
    <div className="App">
      <img src={images[number]} />
      <img src={images[secondDice]} />
      <p>
        {number} {secondDice}
      </p>
      <p> Sum {result}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
