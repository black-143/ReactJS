import { useState } from "react";
import "./styles.css";
import { data, Images } from "./constants";

export default function App() {
  const [color, setColor] = useState("0");
  const [wheels, setWheels] = useState("0");
  const [roof, setRoof] = useState("0");

  const handleColorChange = (e) => {
    setColor(e.target.id);
  };

  const handleWheelChange = (e) => {
    setWheels(e.target.id);
  };

  const handleRoofChange = (e) => {
    setRoof(e.target.id);
  };
  let carType = color + wheels + roof;
  console.log(carType);

  return (
    <div className="App">
      <h1>MAKE IT YOURS</h1>
      <div>
        {data["colorImages"].map((image, index) => {
          return (
            <img
              src={image}
              className="chooseColor"
              id={index}
              onClick={handleColorChange}
            />
          );
        })}
      </div>

      <div>
        {data["wheels"].map((wheel, index) => {
          return <img src={wheel} onClick={handleWheelChange} id={index} />;
        })}
      </div>
      <div>
        <div
          className="mirro1"
          color="yellow"
          id="0"
          onClick={handleRoofChange}
        ></div>
        <div className="mirro2" id="1" onClick={handleRoofChange}></div>
        <div className="mirro3" id="2" onClick={handleRoofChange}></div>
        <div className="mirro4" id="3" onClick={handleRoofChange}></div>
        <div className="mirro5" id="4" onClick={handleRoofChange}></div>
      </div>

      <div className="showCar">
        {Images[carType] ? <img src={Images[carType]} /> : null}
      </div>
    </div>
  );
}
