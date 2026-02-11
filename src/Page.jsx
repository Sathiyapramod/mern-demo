// strict mode
import React from "react";
import { useState } from "react";

function Page() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount((x) => x + 1);
  const subOne = () => setCount((x) => x - 1);

  return (
    <div>
      {count}
      <br />
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
    </div>
  );
}

export default Page;
