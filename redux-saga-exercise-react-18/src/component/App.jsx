import React from "react";
import { Route, Routes } from "react-router-dom";

import "../assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./Main";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </>
);

export default App;
