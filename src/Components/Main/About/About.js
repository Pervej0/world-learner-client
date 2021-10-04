import React from "react";
import "./About.css";
import History from "./History";
import Intro from "./Intro";

const About = () => {
  return (
    <main>
      <section className="about-banner flex justify-center items-center">
        <h1 className="text-4xl text-white">About us</h1>
      </section>
      {/* intro section */}
      <Intro />
      {/* history section */}
      <History />
    </main>
  );
};

export default About;
