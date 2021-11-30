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
      <div className="container">
        <div className="center">
          <h1 className="heading">Hello {name == "" ? "World" : name} From BridgeLabz</h1>
          <img src={logo} onClick={openSite} alt="BridgeLabz Logo" className="img_btn" />
          <div>
            <input className="input" type="text" value={name} onChange={inputHandler} /><br />
            <span className="errorMessage">{nameError}</span>
          </div>
        </div>
        <p>At Bridge Labz, we're a techie community of</p>
        <ul className="list">
          <li>technologists</li>
          <li>thinkers</li>
          <li>builders</li>
        </ul>
        <p>Working together to keep the Tech Employability of Engineers alive and accessible, so
          Tech Companies worldwide can get contributors and creators for Technology Solutions.
          We believe this act of human collaboration across an employability platform is essential
          to individual growth and our collective future.
        </p>
        <br />
        <p>To Know about us, visit <a target="_blank" href="https://www.bridgelabz.com/">BridgeLabz</a> to learn even more about our mission
          <br /> i.e.<span className="bolder">Employability to all</span>
        </p>
      </div>
    </div>
  );
}

export default App;
