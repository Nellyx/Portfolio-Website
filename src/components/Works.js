import React from "react";
import "./Works.css";

function Works() {
  return (
    <div className="work">
      <div className="content">
        <div className="container-one">
          <h1>Frontend Development</h1>
          <p>
            Websites application or other design related tasks. I love tackling
            digital problems.I build modern and scalable user interfaces using
            modern frontend web technologies.
          </p>

          <button>
            See my works <img src="/images/east.svg" alt="left arrow" />
          </button>
        </div>

        <div className="container-two">
          <div className="sub-container">
            <h1>UI/UX Design</h1>
            <p>
              I design too using Figma tool. I'm dedicated to providing fluid
              user experiences while being stylish.
            </p>
            <button>
              See my works <img src="/images/east.svg" alt="left arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
