import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import ColorTabs from "./components/ColorTabs";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
import theme from "./components/theme";
import Home from "./pages/Home";
import TopScore from "./pages/TopScore";
import waldo1 from "./assets/waldo1.jpg";
import waldo2 from "./assets/waldo2.jpg";
import waldo3 from "./assets/waldo3.jpg";
import waldo4 from "./assets/waldo4.jpg";
import waldo5 from "./assets/waldo5.jpg";
import waldo6 from "./assets/waldo6.jpg";

import "./styles/App.scss";

const App = () => {
  const [puzzles, setPuzzles] = useState([
    {
      img: waldo1,
      id: "waldo1",
      level: 1,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
    {
      img: waldo2,
      id: "waldo2",
      level: 2,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
    {
      img: waldo3,
      id: "waldo3",
      level: 3,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
    {
      img: waldo4,
      id: "waldo4",
      level: 4,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
    {
      img: waldo5,
      id: "waldo5",
      level: 5,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
    {
      img: waldo6,
      id: "waldo6",
      level: 6,
      characters: ["waldo", "wizard", "wendy", "odlaw"],
    },
  ]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ColorTabs />
          <Routes>
            <Route path="/" element={<Home puzzles={puzzles} />} />
            <Route path="/puzzles/:id" element={<Puzzle puzzles={puzzles} />} />
            <Route path="/top-scores" element={<TopScore />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
