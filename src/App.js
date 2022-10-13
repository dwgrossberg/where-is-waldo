import { ThemeProvider } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import ColorTabs from "./components/ColorTabs";
import theme from "./components/theme";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ColorTabs />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
