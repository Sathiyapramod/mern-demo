import React from "react";

function DisplayTemperature({ currentValue, setTemp }) {
  // styled components

  const containerStyle = {
    border: "1px solid black",
    backgroundColor: "#FFE2A8",
    display: "block",
    width: "fit-content",
    padding: "20px",
    fontWeight: "700",
    fontSize: "24px",
    marginTop: "16px",
  };

  const handleIncrement = () =>
    setTemp((prev) => {
      return parseInt(prev) + 1;
    });

  const handleDecrement = () =>
    setTemp((prev) => {
      return prev - 1;
    });

  return (
    <div style={containerStyle}>
      <p>Current Temperature is {currentValue} &#176;&nbsp;C</p>
      <div>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
      </div>
      <p>
        {currentValue > 30 ? (
          <div>It is Hotter</div>
        ) : (
          <div>It is Cold</div>
        )}
      </p>
    </div>
  );
}

export default DisplayTemperature;
