import "./Experience.css";
import React from "react";

function Experience() {
  return (
    <div className="experience">
      <div className="flex">
        <div className="text">
          <h1 className="header-text">3+ years working experience</h1>
          <p className="paragraph">
            Over the years, I have builts products for large and small
            businesses all across the country, ranging from marketing websites
            to complex commercial websites, all with an emphasis on providing
            fast, elegant and accesible user experiences
          </p>
          <p className="paragraph">
            Currently, I work at African Trainovation Consult as a Frontend
            Engineer where i build applications using Reactjs
          </p>

          <p className="paragraph">
            Before now, the prinicipal frontend Engineer at 720degree Innovation
            Hub, where i built different user interfaces using modern web
            technologies
          </p>
          <button>
            Download Resume
          </button>
        </div>
        <div>
          <img src="/images/vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
