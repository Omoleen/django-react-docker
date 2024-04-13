import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({
    date: "",
    time: "",
  });
  useEffect(() => {
    console.log("Fetching data...")
    axios.get("http://localhost:8000/api/datetime")
    .then((res) => {
      console.log(res.data);
      setData({
        date: res.data.date,
        time: res.data.time,
      });
    })
  } , []);
  return (
    <div>
      <h1> Hello World </h1>
      <h2> API call time</h2>
      <h2> Date: {data.date} </h2>
      <h2> Time: {data.time} </h2>
    </div>
  );
}

export default App;
