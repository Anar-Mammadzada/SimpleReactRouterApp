import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/contact" Component={Contact}></Route>
      <Route path="/:user" Component={Card}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
