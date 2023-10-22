import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard, MainPage } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import UserDetails from "./contexts/UserContext.js";
import Loader from "./components/Loader/Loader";
import Aos from "aos";
import { useScreenWidth } from "./hooks/useScreenWidth";
function App() {
  
  const size = useScreenWidth();
  useEffect(() => {
    Aos.init({
      duration: 700,
      offset: size > 900 ? -500 : 0,
    });
  }, [size]);

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
