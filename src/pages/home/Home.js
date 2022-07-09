import React from "react";
import Hero from "../../components/Hero";
import Aboutbar from "../../components/Aboutbar";
import Experience from "../../components/Experience";
import Works from "../../components/Works";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Aboutbar />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
