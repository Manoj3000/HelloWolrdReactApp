import React, { useState } from 'react';
import logo from "./assets/logo.png";
import './App.css';

function App() {
  const [message, setMessage] = useState("Hello World From BridgeLabz");
  return (
    <div className="App">
      <h1>{message}</h1>
      <img src={logo} alt="BridgeLabz Logo" />
    </div>
  );
}

export default App;
