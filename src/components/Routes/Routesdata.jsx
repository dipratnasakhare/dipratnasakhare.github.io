import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import About from "../Home/pages/About";
import { Contact } from "../Home/pages/Contact";
import { Github } from "../Home/pages/github";
import Projects from "../Home/pages/Projects";
import Skills from "../Home/pages/Skills";
import  Navbar  from "../Navbar/Navbar";
import Social from "../page/Social";
const Routesdata = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Social />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navbar />
              <Skills />
            </>
          }
        />
        <Route
          path="/github"
          element={
            <>
              <Navbar />
              <Github />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Routesdata;
