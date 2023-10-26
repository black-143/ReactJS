import "./styles.css";
import { cart1, cart2 } from "./data.js";
import Cart from "./Cart";
import { useState } from "react";

export default function App() {
  const [cartA, setCartA] = useState(cart1);
  const [cartB, setCartB] = useState(cart2);

  const swapOdds = () => {
    const newCartA = [...cartA];
    const newCartB = [...cartB];

    for (let i = 0; i < cartA.length; i++) {
      newCartA[i] = cartB[i];
      newCartB[i] = cartA[i];
    }
    setCartA(newCartA);
    setCartB(newCartB);
  };
  return (
    <div className="page flex">
      <div className="flex container">
        <Cart item={cartA} cartNumber={1} />
        <button className="swap-button" onClick={swapOdds}>
          Swap odds
        </button>
        <Cart item={cartB} cartNumber={2} />
      </div>
    </div>
  );
}
