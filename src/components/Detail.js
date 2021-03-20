import React, { useState } from "react";
import Axios from "axios";

function Detail(props) {
  const [beerList, setBeerList] = useState("");
  const call = () => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeerList(response);
    });
    console.log(beerList);
  };

  return (
    <div>
      <h1>{}</h1>
    </div>
  );
}

export default Detail;
