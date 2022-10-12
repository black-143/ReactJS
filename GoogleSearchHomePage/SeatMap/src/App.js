import { useState } from "react";
import "./styles.css";
export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleClick = (e) => {
    let curSelectedSeats = selectedSeats;
    if (curSelectedSeats.includes(e.target.id)) {
      curSelectedSeats.splice(curSelectedSeats.indexOf(e.target.id), 1);
    } else {
      curSelectedSeats.push(e.target.id);
    }
    setSelectedSeats([...curSelectedSeats]);
    console.log(selectedSeats);
  };

  return (
    <div className="App">
      {[...Array(100)].map((elem, index) => {
        let seatIndex =
          String.fromCharCode(65 + Math.floor(index / 10)) +
          Math.floor(index % 10);
        return (
          <>
            <div
              id={seatIndex}
              style={{
                backgroundColor: selectedSeats.includes(seatIndex)
                  ? "green"
                  : "skyblue"
              }}
              className="square"
              onClick={handleClick}
            ></div>
          </>
        );
      })}
      <p>Selected Seats:{selectedSeats.join(",")}</p>
    </div>
  );
}
