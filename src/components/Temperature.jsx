import React from "react";
import { useState } from "react";
import DisplayTemperature from "./DisplayTemperature";

function Temperature() {
  const [temp, setTemp] = useState(0);

  const handleChange = (event) => {
    setTemp(event.target.value);
  };

  return (
    <div>
      <h1>Select your range of temperature</h1>
      <input type="number" onChange={handleChange} value={temp} />
      <DisplayTemperature currentValue={temp} setTemp={setTemp} />
    </div>
  );
}

export default Temperature;
