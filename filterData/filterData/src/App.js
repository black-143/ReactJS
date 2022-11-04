import { useEffect, useState } from "react";
import "./styles.css";
import { TextField } from "@mui/material";

export default function App() {
  const [firstNamesData, setFirstNamesData] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  useEffect(() => {
    fetch("https://mocki.io/v1/aed63c02-9c5a-421b-a9e4-f194c9210134")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFirstNamesData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const filterResults = firstNamesData.filter((monster) =>
    monster.toLowerCase().includes(searchKeyWord.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  return (
    <div className="App">
      <TextField placeholder="search here" onChange={handleChange} />
      {filterResults.map((name) => {
        return <p>{name}</p>;
      })}
    </div>
  );
}
