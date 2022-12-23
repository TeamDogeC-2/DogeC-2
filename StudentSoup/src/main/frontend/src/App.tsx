import React from "react";
import "./App.css";
import Routes from "./Routes";
import Home from './components/home/homeComponent';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Home/>
    </BrowserRouter>
  );
};

export default App;
