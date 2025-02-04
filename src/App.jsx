import React from "react";
import Hero from "./pages/hero";
import Home from "./pages/home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
