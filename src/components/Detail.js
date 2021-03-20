import React, { useState, useEffect } from "react";
import Axios from "axios";

function Detail(props) {
  const [beerInfo, setInfo] = useState("Jo");
  useEffect(() => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      const beerData = response.data;
      setInfo(beerData);
      console.log(beerData);
    });
  }, []);

  return (
    <div>
      <h1>{beerInfo[0].name}</h1>
    </div>
  );
}

export default Detail;
