import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "@fontsource/roboto/600.css";

function App() {
  return (
    <Box>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Box>
  );
}

export default App;
