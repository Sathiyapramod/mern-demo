import React from "react";
import { useState } from "react";

function Card({ imgSrc, name, brand, price }) {
  // declare my initial value
  const [qty, setQty] = useState(0);

  const handleClick = () => {
    setQty((z) => z + 1);
  };

  return (
    <div className="card">
      <img src={imgSrc} alt="sample_text" width={300} height={250} />
      <div className="wrapper">
        <div className="">
          <p className="heading"> {name} </p>
          <p className="sub-heading"> {brand} </p>
          <p className="">{price}</p>
        </div>
        <div>
          <button onClick={handleClick}>+</button>
          <p>Items: &nbsp;{qty}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
