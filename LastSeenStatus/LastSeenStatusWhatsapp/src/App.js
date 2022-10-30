import { useState } from "react";
import "./styles.css";

export default function App() {
  const [lastSeenStatus, setLastSeenStatus] = useState("");
  const [userSelectedDatetime, setUserSelectedDateTime] = useState("");
  function timeDifference(date1, date2) {
    var difference = date1.getTime() - date2.getTime();

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    var secondsDifference = Math.floor(difference / 1000);

    console.log(
      "difference = " +
        daysDifference +
        " day/s " +
        hoursDifference +
        " hour/s " +
        minutesDifference +
        " minute/s " +
        secondsDifference +
        " second/s "
    );

    if (daysDifference >= 365) {
      setLastSeenStatus("last seen an year ago");
    } else if (daysDifference >= 30) {
      setLastSeenStatus("last seen a month ago");
    } else if (daysDifference >= 1) {
      setLastSeenStatus("last seen " + daysDifference + " day/s ago");
    } else if (hoursDifference == 1) {
      setLastSeenStatus(
        "last seen an hour ago at " +
          date2.getHours() +
          ":" +
          date2.getMinutes()
      );
    } else if (hoursDifference > 1) {
      setLastSeenStatus(
        "last seen today at " + date2.getHours() + ":" + date2.getMinutes()
      );
    } else if (minutesDifference >= 1) {
      setLastSeenStatus("last seen a minute ago");
    } else if (secondsDifference <= 59) {
      setLastSeenStatus("last seen just now");
    }
  }
  const handleClick = () => {
    let date1 = new Date();
    let date2 = new Date(userSelectedDatetime);
    timeDifference(date1, date2);
  };
  const handleChange = (e) => {
    setUserSelectedDateTime(e.target.value);
  };
  return (
    <div className="App">
      <input type="datetime-local" onChange={handleChange} />
      <button onClick={handleClick} disabled={userSelectedDatetime === ""}>
        Click
      </button>
      <p>{lastSeenStatus}</p>
    </div>
  );
}
