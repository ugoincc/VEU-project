import React from "react";
import Perfil from "../paginas/Perfil";
import HomePage from "../paginas/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";

function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default Content;
