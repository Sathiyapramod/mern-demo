import React, { useState } from "react";

function NumberChecker() {
  const outputBox = {
    backgroundColor: "wheat",
    border: "1px solid black",
    borderRadius: "8px",
    width: "150px",
    height: "100px",
    marginTop: "30px",
  };

  const [userInput, setUserInput] = useState("");
  const [value, setValue] = useState([]); // empty array

  const handleChange = (event) => {
    let result = event.target.value;

    result = parseInt(result);

    if (isNaN(result) === true) {
      alert("Invalid Number combination");
    } else {
      //   it should be greater than 0 and less than 50
      if (result > 50) alert("you have entered value more than 50");
      else if (result < 0) {
        alert("you have entered value less than zero");
      } else setUserInput(result);
    }
  };

  const handleClick = () => {
    // !! list updation
    setValue((prev) => {
      if (userInput !== "") {
        let temp = [...prev, userInput];
        return temp;
      }
      return prev;
    });
    //   !! input reset
    setUserInput("");
  };

  return (
    <div>
      <div>
        {/* input box */}
        <input
          type="text"
          placeholder="Enter number between 0 and 50"
          onChange={handleChange}
          value={userInput}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div style={outputBox}>{value.join(",")}</div>
    </div>
  );
}

export default NumberChecker;
