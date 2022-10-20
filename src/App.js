import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { db } from "./firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import ColorTabs from "./components/ColorTabs";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
import theme from "./theme";
import Home from "./pages/Home";
import BestTimes from "./pages/BestTimes";
import waldo1 from "./assets/waldo1.jpg";
import waldo2 from "./assets/waldo2.jpg";
import waldo3 from "./assets/waldo3.jpg";
import waldo4 from "./assets/waldo4.jpg";
import waldo5 from "./assets/waldo5.jpg";
import waldo6 from "./assets/waldo6.jpg";
import waldo from "./assets/waldo.jpg";
import wizard from "./assets/wizard.jpg";
import wenda from "./assets/wendy.jpg";
import odlaw from "./assets/odlaw.jpg";
import "./styles/App.scss";

const App = () => {
  const [puzzles, setPuzzles] = useState([
    {
      img: waldo1,
      id: "waldo1",
      level: 1,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
    {
      img: waldo2,
      id: "waldo2",
      level: 2,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
    {
      img: waldo3,
      id: "waldo3",
      level: 3,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
    {
      img: waldo4,
      id: "waldo4",
      level: 4,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
    {
      img: waldo5,
      id: "waldo5",
      level: 5,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
    {
      img: waldo6,
      id: "waldo6",
      level: 6,
      characters: [
        { name: "waldo", img: waldo },
        { name: "wizard", img: wizard },
        { name: "wenda", img: wenda },
        { name: "odlaw", img: odlaw },
      ],
    },
  ]);

  const [bestTimes, setBestTimes] = useState([
    { level1: [] },
    { level2: [] },
    { level3: [] },
    { level4: [] },
    { level5: [] },
    { level6: [] },
  ]);

  useEffect(() => {
    const getTimes = async () => {
      const querySnapshot = await getDocs(collection(db, "puzzles"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().bestTimes);
        const bestTimesCopy = [...bestTimes];
        switch (doc.id) {
          case "level1":
            bestTimesCopy[0].level1 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          case "level2":
            bestTimesCopy[1].level2 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          case "level3":
            bestTimesCopy[2].level3 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          case "level4":
            bestTimesCopy[3].level4 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          case "level5":
            bestTimesCopy[4].level5 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          case "level6":
            bestTimesCopy[5].level6 = doc.data().bestTimes;
            setBestTimes(bestTimesCopy);
            break;
          default:
            console.log(doc.id);
        }
      });
    };
    getTimes();
  }, []);

  useEffect(() => {
    console.log(bestTimes);
  }, [bestTimes]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ColorTabs />
          <Routes>
            <Route path="/" element={<Home puzzles={puzzles} />} />
            <Route path="/puzzles/:id" element={<Puzzle puzzles={puzzles} />} />
            <Route path="/best-times" element={<BestTimes />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
