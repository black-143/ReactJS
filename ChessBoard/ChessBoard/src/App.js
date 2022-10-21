import { useState } from "react";
import "./styles.css";

export default function App() {
  let rowType;
  return (
    <div className="board">
      {[...Array(64)].map((item, index) => {
        if (index % 8 === 0) {
          rowType = Math.floor(index / 8) % 2;
        }
        return (
          <>
            <div
              className="square"
              style={{
                backgroundColor:
                  rowType % 2 === 0 && index % 2 === 1
                    ? ("black": "grey")
                    : rowType % 2 === 1 && index % 2 === 0
                    ? "black"
                    : "grey"
              }}
            ></div>
          </>
        );
      })}
      {/* {[...Array(8)].map((elem, index) => {
        <div id={index} className="square" onClick={handleClick}></div>;
      })} */}
    </div>
  );
}
