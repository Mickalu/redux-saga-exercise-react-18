import React from "react";
import { Route, Routes } from "react-router-dom";

import "../assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default App;
