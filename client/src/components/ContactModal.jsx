import React, { useState } from "react";
import axios from "axios";
import "../styles/_contactModal.scss"

const ContactModal = ({ isOpen, onClose, id }) => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(""); // Add phone state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        `http://localhost:9000/api/applications/${id}`,
        {
          title,
          email,
          message,
          phone, // Include the phone field
        }
      );

      // Reset the form
      setTitle("");
      setEmail("");
      setMessage("");
      setPhone(""); // Reset the phone field

      // Handle the response from the server if needed
      console.log(response.data);
    } catch (error) {
      // Handle any error that occurred during the request
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="close" onClick={() => onClose(false)}>
          &times;
        </span>
        <h2 className="modal__contentHeading">Contact Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="modal__contentName"> 
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          </div>

          <div className="modal__contentEmail"> 
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <div className="modal__contentPhone"> 
          <label htmlFor="phone">Phone:</label>
          <br></br>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>

          <div className="modal__contentMessage"> 
          <label htmlFor="message">Message:</label>
          <br></br>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
