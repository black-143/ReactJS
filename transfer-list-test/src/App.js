import Action from "./Action";
import List from "./List";
import "./styles.css";

import { items } from "./data";
import { useState } from "react";
import { intersection, note } from "./Utils";

export default function App() {
  const [listitems, setListItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setcheckedItems] = useState([]);

  const leftcheckedItems = intersection(listitems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex == -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setcheckedItems(newCheckedItems);
  };
  const moveRight = () => {
    setRightItems(rightItems.concat(leftcheckedItems));
    setListItems(note(listitems, leftcheckedItems));
    setcheckedItems(note(checkedItems, leftcheckedItems));
  };
  const moveLeft = () => {
    setListItems(listitems.concat(rightCheckedItems));
    setRightItems(note(rightItems, rightCheckedItems));
    setcheckedItems(note(checkedItems, rightCheckedItems));
  };
  return (
    <div className="App flex">
      <List items={listitems} handleToggle={handleToggle} />
      <Action moveRight={moveRight} moveLeft={moveLeft} />
      <List items={rightItems} handleToggle={handleToggle} />
    </div>
  );
}
