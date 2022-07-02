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
              <input className="input-form1" type="text" />
            </div>
            <div className="email-form">
              <label htmlFor="Email Adress">Email Address</label>
              <input className="input-form1" type="text" />
            </div>
          </div>
          <div className="forms2">
            <div>
              <label htmlFor="your message">Your message</label>
              <input className="input-form2" type="text" />
            </div>
          </div>
          <div className="button-div">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
