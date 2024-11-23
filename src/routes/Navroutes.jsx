import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Event from "../components/Event";
import Gallery from "../components/Gallery";
import Eventsinfo from "../components/Eventsinfo";
const Navroutes = () => {
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
