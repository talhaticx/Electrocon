import React from "react";
import Welcome from "./pages/welcome";
import Home from "./pages/home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
