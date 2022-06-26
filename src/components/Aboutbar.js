import "./Aboutbar.css";

import React from "react";

function Aboutbar() {
  return (
    <div className="aboutbar">
      <div className="about-content">
        <div className="left-text">
          <p className="heading">About Me</p>
          <h1>Michael Nelson</h1>
          <p>
            I am a young determined, self-motivated and passionate Frontend
            developer aimed at making positive impact in the growth and
            development of an organization that aligns with my values and
            career. I am well-versed in a variety of modern web tools, as well
            as the concepts and practices of web app development and maintenance
          </p>
        </div>

        <div className="right-text">
          <p className="main">
            I am a frontend developer with 3+ years of experience. I am an
            expert in creating amazing digital web products
          </p>

          <div className="my-skills">
            <p className="heading">My Skills</p>
            <h2>Why hire me for your next project</h2>

            <p className="main">
              I possess all the skills and experiences your looking for to build
              a high-end solid and scalable front-end products with great user
              experiences. I have built products for small companies and start
              ups around the globe ranging from marketing to complex solution
              enterprises.
            </p>

            <div className="techbox">
              <p className="tech-text">
                Here are the technologies i have been working with recently:
              </p>

              <div className="grid">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>Typescript</p>
                <p>Reactjs</p>
                <p>Firebase</p>
                <p>Firestore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutbar;
