import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import ColorTabs from "./components/ColorTabs";
import Footer from "./components/Footer";
import Game from "./components/Game/Game";
import theme from "./components/theme";
import Home from "./pages/Home/Home";
import TopScore from "./pages/TopScore/TopScore";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ColorTabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/top-scores" element={<TopScore />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
