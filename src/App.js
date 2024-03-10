import { Routes, Route } from "react-router-dom"; 
import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import Navbar from "./components/Navbar/navbar.component";
import Temp from "./components/temp";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={ <Navbar />} />

    </Routes>
  );
}

export default App;

