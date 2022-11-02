import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [shareDetails, setShareDetails] = useState({
    option1Count: 0,
    option1Percentage: "",
    option2Count: 0,
    option2Percentage: "",
    option3Count: 0,
    option3Percentage: ""
  });
  const handleClick = (e) => {
    let tempCount = count;
    tempCount += 1;
    if (e.target.innerHTML === "Work from home") {
      let res = shareDetails.option1Count;
      res += 1;
      let op1Percentage = Math.round((res / tempCount) * 100, 2);
      let op2Percentage = Math.round(
        (shareDetails.option2Count / tempCount) * 100,
        2
      );
      let op3Percentage = Math.round(
        (shareDetails.option3Count / tempCount) * 100,
        2
      );
      setShareDetails({
        ...shareDetails,
        option1Count: res,
        option1Percentage: op1Percentage,
        option2Percentage: op2Percentage,
        option3Percentage: op3Percentage
      });
    } else if (e.target.innerHTML === "Work from office") {
      let res = shareDetails.option2Count;
      res += 1;
      let op2Percentage = Math.round((res / tempCount) * 100, 2);
      let op1Percentage = Math.round(
        (shareDetails.option1Count / tempCount) * 100,
        2
      );
      let op3Percentage = Math.round(
        (shareDetails.option3Count / tempCount) * 100,
        2
      );
      setShareDetails({
        ...shareDetails,
        option2Count: res,
        option2Percentage: op2Percentage,
        option1Percentage: op1Percentage,
        option3Percentage: op3Percentage
      });
    } else if (e.target.innerHTML === "Hybrid") {
      let res = shareDetails.option3Count;
      res += 1;
      let op3Percentage = Math.round((res / tempCount) * 100, 2);
      let op2Percentage = Math.round(
        (shareDetails.option2Count / tempCount) * 100,
        2
      );
      let op1Percentage = Math.round(
        (shareDetails.option1Count / tempCount) * 100,
        2
      );
      setShareDetails({
        ...shareDetails,
        option3Count: res,
        option3Percentage: op3Percentage,
        option1Percentage: op1Percentage,
        option2Percentage: op2Percentage
      });
    }
    setCount(tempCount);
  };

  return (
    <div className="App">
      <h2>Do you like working from home?In the office?Or Hybrid</h2>
      <div onClick={handleClick}>
        <button className="button1">Work from home</button>
        {shareDetails.option1Percentage &&
        shareDetails.option1Percentage !== "" ? (
          <span>{shareDetails.option1Percentage}%</span>
        ) : null}
        <br />
        <button className="button2">Work from office</button>
        {shareDetails.option2Percentage &&
        shareDetails.option2Percentage !== "" ? (
          <span>{shareDetails.option2Percentage}%</span>
        ) : null}
        <br />
        <button className="button3">Hybrid</button>
        {shareDetails.option3Percentage &&
        shareDetails.option3Percentage !== "" ? (
          <span>{shareDetails.option3Percentage}%</span>
        ) : null}
        <p className="p">Total votes : {count}</p>
      </div>
    </div>
  );
}
