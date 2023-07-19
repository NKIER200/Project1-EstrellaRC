import React, { useState } from "react";
import "../index.css"; // Import the CSS file for this component

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send email, save data, etc.)
    // You can add your own implementation here
    setSubmitted(true);
  };

  return (
    <div className="page-content">
      <h1 className="truegold1">Contact</h1>
      <div className="contact-form">
        {submitted ? (
          <p className="success-message">
            Thank you for your message! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
