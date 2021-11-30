import React, { useState } from 'react';
import logo from "./assets/logo.png";
import './App.css';

function App() {
  const [message, setMessage] = useState("Hello World From BridgeLabz");

  const openSite = () =>{
    window.open("https://www.bridgelabz.com/", "_blank")
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <img src={logo} onClick={openSite} alt="BridgeLabz Logo" className="img_btn" />
    </div>
  );
}

export default App;
