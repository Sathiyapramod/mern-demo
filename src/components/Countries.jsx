import React, { useEffect, useState } from "react";
import API_URL from "../config";

function Countries() {
  const [list, setList] = useState([]);

  // api call
  const getCountries = async () => {
    try {
      let response = await fetch(API_URL);
      if (response.status !== 200) {
        console.log("some  error happened");
      } else {
        let result = await response.json();
        console.log(result);
        setList(result);
      }
    } catch (err) {
      console.log(err, "error");
    }
  };

  // whenever Countries Component is getting rendered,
  // I need to make API call
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {list.map((country) => {
        return <div key={country.name.common}>{country.name.common}</div>;
      })}
    </div>
  );
}

export default Countries;
