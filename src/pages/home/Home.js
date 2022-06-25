import React from "react";
import Hero from "../../components/Hero";
import Aboutbar from "../../components/Aboutbar";
import Experience from "../../components/Experience";
import Works from "../../components/Works";
import Contact from "../../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Aboutbar />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;
