// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Content from "./screens/Content";
import Members from "./screens/Members";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="members">
          <Members />
        </div>
        <div id="content">
          <Content />
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
