import "./styles.css";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, i) => {
          return (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected == i ? "-" : "+"}</span>
              </div>
              <div className={selected == i ? "content-show" : "content"}>
                <h2>{item.answer}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question 1",
    answer: "Lorem antony"
  },
  {
    question: "Question 2",
    answer: "Answering the question"
  },
  {
    question: "Question 3",
    answer: "Answering the questions here "
  },
  {
    question: "Question 4",
    answer: "Your answer uiiui uiuy88 some text"
  }
];
