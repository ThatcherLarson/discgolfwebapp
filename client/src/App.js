import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
