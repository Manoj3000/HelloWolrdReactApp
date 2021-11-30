import React, { useState } from 'react';
import logo from "./assets/logo.png";
import './App.css';

function App() {
  const [name, setName] = useState("");

  const openSite = () => {
    window.open("https://www.bridgelabz.com/", "_blank")
  }

  return (
    <div className="App">
      <h1>Hello {name == "" ? "World" : name} From BridgeLabz</h1>
      <img src={logo} onClick={openSite} alt="BridgeLabz Logo" className="img_btn" />
      <div>
        <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
