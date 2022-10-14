import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TopPageInfo from "./components/TopPageInfo/TopPageInfo";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <React.Fragment>
      <TopPageInfo />
      <Navbar />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
