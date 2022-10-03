import React from 'react';
import './Email.css';
import emailjs from "@emailjs/browser";

const Email = () => {
    const sendEmail = (e) => {
      e.preventDefault();
      console.log("Hello");

      emailjs
        .sendForm(
          "gmail",
          "template_wa5io8bd",
          e.target,
          "0QBKu5hPcb71KgpqB"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    };
    return (
      <div className="form">
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required name="name" />
          <input
            type="email"
            placeholder="abc@gmail.com"
            required
            name="email"
            id=""
          />
          <input
            type="text"
            placeholder="subject"
            required
            name="subject"
            id=""
          />
          <textarea placeholder="message" required name="message" />
          <input id="email-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default Email;