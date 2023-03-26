import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [divs, setDivs] = useState([]);
  useEffect(() => {
    let timer;
    if (divs.length > 0) {
      timer = setTimeout(() => {
        const newDivs = [...divs];
        newDivs.shift(); // Remove the first div
        setDivs(newDivs);
      }, 3000);
    }

    // Clean up the timer when the component unmounts or the state changes
    return () => {
      clearTimeout(timer);
    };
  }, [divs]);
  const handleClick = (e) => {
    const newDivs = [...divs];
    if (e.target.id === "info") {
      newDivs.push(
        <div
          className="notification-item"
          style={{ backgroundColor: "#3498db" }}
        >
          <p>Information message</p>
        </div>
      );
    } else if (e.target.id === "success") {
      newDivs.push(
        <div
          className="notification-item"
          style={{ backgroundColor: "#2ecc71" }}
        >
          <p>Success</p>
        </div>
      );
    } else if (e.target.id === "warning") {
      newDivs.push(
        <div
          className="notification-item"
          style={{ backgroundColor: "#f1c40f" }}
        >
          <p>Warning</p>
        </div>
      );
    } else {
      newDivs.push(
        <div
          className="notification-item"
          style={{ backgroundColor: "#e74c3c" }}
        >
          <p>Error</p>
        </div>
      );
    }
    setDivs(newDivs);
  };
  return (
    <div className="content">
      <h1>Add Notifications</h1>
      <button className="info" id="info" onClick={handleClick}>
        Info
      </button>

      <br />
      <button className="success" id="success" onClick={handleClick}>
        Success
      </button>
      <br />
      <button className="warning" id="warning" onClick={handleClick}>
        Warning
      </button>
      <br />
      <button className="error" id="error" onClick={handleClick}>
        Error
      </button>
      <div className="notifications-wrapper">
        {divs.map((div) => {
          return <>{div}</>;
        })}
      </div>
    </div>
  );
}
