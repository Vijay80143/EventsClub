import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Event from "../components/Event";
import Gallery from "../components/Gallery";
import Eventsinfo from "../components/Eventsinfo";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Navroutes = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/event" element={<Event />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/eventsinfo/:id" element={<Eventsinfo />} />
    </Routes>
  );
};

export default Navroutes;
