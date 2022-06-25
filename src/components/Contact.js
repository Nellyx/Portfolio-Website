import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="content">
        <h1>Get in touch!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form action="">
          <div className="forms1">
            <div>
              <label htmlFor="your name">Your Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="Email Adress">Email Address</label>
              <input type="text" />
            </div>
          </div>
          <div className="forms2">
            <div>
              <label htmlFor="your name">Your Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="Email Adress">Email Address</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
