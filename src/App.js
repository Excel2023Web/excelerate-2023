import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard, MainPage } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import UserDetails from "./contexts/UserContext.js";
import Loader from "./components/Loader/Loader";
function App() {
  return (
    <UserDetails>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </UserDetails>
  );
}

export default App;
