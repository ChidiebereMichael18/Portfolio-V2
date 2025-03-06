import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className=" bg-black min-w-full max-w-full">
      <Navbar />
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Home;
