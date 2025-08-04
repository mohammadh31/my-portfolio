import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #0d47a1)",
        color: "white",
        paddingBottom: 10,
      }}
    >
      <Container maxWidth="md">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Container>
    </Box>
  );
}

export default App;
