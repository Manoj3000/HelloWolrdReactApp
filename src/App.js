import React, { useState } from 'react';
import logo from "./assets/logo.png";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const openSite = () => {
    window.open("https://www.bridgelabz.com/", "_blank")
  }

  const inputHandler = (e) => {
    const nameRegex = new RegExp("[A-z]{1}[a-zA-Z\\s]{2,}$");

    console.log(e.target.value);
    setName(e.target.value)
    
    if (nameRegex.test(e.target.value)) {
      setNameError("")
    } else {
      setNameError("Invalid Name!")
    }
    
  }

  return (
    <div className="App">
      <h1>Hello {name == "" ? "World" : name} From BridgeLabz</h1>
      <img src={logo} onClick={openSite} alt="BridgeLabz Logo" className="img_btn" />
      <div>
        <input className="input" type="text" value={name} onChange={inputHandler} /><br />
        <span>{nameError}</span>
      </div>
    </div>
  );
}

export default App;
