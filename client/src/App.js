import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
