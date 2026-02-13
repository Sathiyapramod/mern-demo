import React, { useEffect, useState } from "react";

function StopWatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning == true) {
      //   mounting stage
      const interval = setInterval(() => {
        setSeconds((seconds) => {
          // if seconds > 59, change it to zero
          // increment the existing minute value
          if (seconds == 59) {
            setMinutes(minutes + 1);
            return 0;
          } else {
            return seconds + 1;
          }
        });
      }, 1000);
      //   un-mounting stage
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div>
      <h1>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>
          {isRunning == true ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
