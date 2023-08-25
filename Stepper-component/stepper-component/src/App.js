import Stepper from "./Stepper";
import "./styles.css";

export default function App() {
  const list = [
    <Example1 />,
    <Example2 />,
    <Example3 />,
    <Example4 />,
    <Example5 />
  ];
  return (
    <div className="App">
      <Stepper list={list} />
    </div>
  );
}

const Example1 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 1</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 2</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 3</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 4</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example5 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Hello 5</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};
