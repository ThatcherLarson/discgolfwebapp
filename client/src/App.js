import React from "react";
import { Discs } from "./features/discs/Discs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.squarespace-cdn.com/content/v1/5d1e6e2fef1a47000197d985/1571604435005-DWHOQ5PONXPEZOOM66HM/Disc+Golf.png" className="App-logo" alt="logo" />
        <Discs />
        <p>Updates coming soon.</p>
      </header>
    </div>
  );
}

export default App;
