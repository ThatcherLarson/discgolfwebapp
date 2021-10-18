import React from "react";
import logo from "./logo.svg";
import { Discs } from "./features/discs/Discs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Discs />
        <p>Updates coming soon.</p>
      </header>
    </div>
  );
}

export default App;
