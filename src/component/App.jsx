import React from "react";
import { Route, Routes } from "react-router-dom";

import "../assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import AuthentificationMainPage from "../container/Authentification/AuthentificationMainPage";
import Register from "../container/Authentification/Register";

const App = ({ isUserConnected }) => (
  <Routes>
    { isUserConnected ? (
      <>
        <Route path="/" element={<Home />} />
      </>
    ) : (
      <>
        <Route path="/" element={<AuthentificationMainPage />} />
        <Route path="/register" element={<Register />} />
      </>
    ) }
  </Routes>
);

export default App;
