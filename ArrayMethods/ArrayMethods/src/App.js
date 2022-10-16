import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const allowedEmoji = [..."😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉"];
  const itemClick = () => {
    let res = items;
    res.push(
      [...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]
    );
    setItems([...res]);
  };
  const removeItem = () => {
    let res = items;
    res.pop();
    setItems([...res]);
  };
  const unshiftItem = () => {
    let res = items;
    res.unshift(
      [...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]
    );
    setItems([...res]);
  };
  const shiftItem = () => {
    let res = items;
    res.shift();
    setItems([...res]);
  };
  const insertAtItem = () => {
    let temp = document.getElementById("number").value;
    let res = items;
    if (temp !== "") {
      res.splice(
        parseInt(temp),
        0,
        [...allowedEmoji][Math.floor(Math.random() * allowedEmoji.length)]
      );
      setItems([...res]);
    }
  };
  const removeAtItem = () => {
    let temp = document.getElementById("index").value;
    let res = items;
    if (temp !== "") {
      res.splice(parseInt(temp), 1);
      setItems([...res]);
    }
  };

  return (
    <div className="App">
      <fieldset>
        <legend>Add item</legend>
        <button className="push" onClick={itemClick}>
          push
        </button>
        <button className="unshift" onClick={unshiftItem}>
          unshift
        </button>
        <button className="insert" onClick={insertAtItem}>
          insert at
        </button>
        <input type="number" id="number" className="number" />
      </fieldset>
      <fieldset>
        <legend>Remove item</legend>
        <button className="pop" onClick={removeItem}>
          pop
        </button>
        <button className="shift" onClick={shiftItem}>
          shift
        </button>
        <button className="remove" onClick={removeAtItem}>
          Remove at
        </button>
        <input type="number" id="index" className="removenumber" />
      </fieldset>
      <p>{items.toString()}</p>
    </div>
  );
}
