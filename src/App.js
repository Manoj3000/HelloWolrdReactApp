import React, { useState } from 'react';  
import './App.css';

function App() {
  const [message, setMessage] = useState("Hello World From BridgeLabz");
  return (
    <div className="App">
     <h1>{message}</h1>
    </div>
  );
}

export default App;
