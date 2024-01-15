import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapElement from "./Pages/Map";
import MapChoice from "./Pages/MapChoice";
import AgentsElement from "./Pages/Agents";
import Playbook from "./Pages/Playbook";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AgentsElement/>} />
      <Route path ="/:id" element={<MapElement/>} />
      <Route path ="/:id/:id" element={<MapChoice/>} />
      <Route path ="/:id/:id/:id" element={<Playbook/>} />
      {/* <Route path="/Lotus" element={<Lotus/>} />
      <Route path="/Ascent" element={<Ascent/>} />
      <Route path="/Bind" element={<Bind/>} />
      <Route path="/Haven" element={<Haven/>} /> */}
    </Routes>
    </>
  );
}

export default App;
