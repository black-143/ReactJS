import "./styles.css";
import Cards from "react-credit-cards";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [expiry, setExpiry] = useState();
  const [cvc, setCvc] = useState();
  const [focus, setFocus] = useState();
  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        cvc={cvc}
        expiry={expiry}
        focused={focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="card number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="name "
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="mm//yy"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}
