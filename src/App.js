import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard, MainPage } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import UserDetails from "./contexts/UserContext.js";
function App() {
  return (
    <UserDetails>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserDetails>
  );
}

export default App;
