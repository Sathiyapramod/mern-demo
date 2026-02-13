import React, { useEffect, useState } from "react";

function Demo() {
  // state
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log("General Purpose - common for all");
  }, []);

  useEffect(() => {
    console.log("this is a side effect of First");
  }, [first]);

  useEffect(() => {
    console.log("any of the two state");
  }, [first, second]);

  return (
    <div>
      <button onClick={() => setFirst((prev) => prev + 1)}>
        First - {first}
      </button>
      <button onClick={() => setSecond((prev) => prev + 1)}>
        Second - {second}
      </button>
    </div>
  );
}

export default Demo;
