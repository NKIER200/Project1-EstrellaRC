// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./Homepage";
import AboutPlayersPage from "./components/AboutPlayersPage";
import Season from "./components/Season";
import NewsPage from "./components/NewsPage";
import NewsArticle from "./components/NewsArticle";
import HonoursPage from "./components/HonoursPage";
import AwardsPage from "./components/AwardsPage";
import StadiumPage from "./components/StadiumPage";
import ContactPage from "./components/ContactPage";

import "./index.css"; // Import the CSS file for this component

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPlayersPage />} />
        <Route path="/season" element={<Season />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/honours" element={<HonoursPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/stadium" element={<StadiumPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
