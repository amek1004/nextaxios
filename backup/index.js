import axios from "axios";
import { useState } from "react";

export default function Index() {
  /*  const travis = {
    name: "travis",
    age: "32",
    hobby: "music",
    eyeGlasses: true,
  };*/
  const [beerList, setBeerList] = useState([]);

  const getBeers = (e) => {
    e.preventDefault();
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setBeerList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Beer Punk</h4>
      <button onClick={getBeers}>Get All Beers</button>
      {beerList.map((beer, idx) => {
        return <p key={idx}>{beer.name}</p>;
      })}
    </div>
  );
}
