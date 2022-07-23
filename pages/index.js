import axios from "axios";

export default function Index() {
  const travis = {
    name: "travis",
    age: "32",
    hobby: "music",
    eyeGlasses: true,
  };

  const getBeers = (e) => {
    e.preventDefault();
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Beer Punk</h4>
      <button onClick={getBeers}>Get All Beers</button>
    </div>
  );
}
