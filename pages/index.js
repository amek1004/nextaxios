import axios from "axios";
import { useState } from "react";

export default function Index() {
  /*  const travis = {
    name: "travis",
    age: "32",
    hobby: "music",
    eyeGlasses: true,
  };*/
  const [flyList, setflyList] = useState([]);
  const url =
    "http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp"; /*URL*/
  let queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D"; /*Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("from_time") +
    "=" +
    encodeURIComponent("0000"); /**/
  queryParams +=
    "&" + encodeURIComponent("to_time") + "=" + encodeURIComponent("2400"); /**/
  queryParams +=
    "&" + encodeURIComponent("airport") + "=" + encodeURIComponent(""); /**/
  queryParams +=
    "&" + encodeURIComponent("flight_id") + "=" + encodeURIComponent(""); /**/
  queryParams +=
    "&" + encodeURIComponent("airline") + "=" + encodeURIComponent("LH"); /**/
  queryParams +=
    "&" + encodeURIComponent("lang") + "=" + encodeURIComponent("K"); /**/
  queryParams +=
    "&" + encodeURIComponent("type") + "=" + encodeURIComponent("json"); /**/
  const getFlyList = (e) => {
    e.preventDefault();
    axios
      .get(url + queryParams)
      .then((res) => setflyList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Arrival Flight</h4>
      <button onClick={getFlyList}>Get All Data</button>
      {flyList.map((items, flightId) => {
        return <p key={flightId}>{items.flightId}</p>;
      })}
    </div>
  );
}
