import React from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Hello");

    emailjs
      .sendForm("gmail", "template_wa5io8bd", e.target, "0QBKu5hPcb71KgpqB")
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email has been sent successfully!",
            text : "Check you Email",
            showConfirmButton: true,
            timer: 1000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="form">
      <h1>
        <span>C</span>ONTACT <span>U</span>S
      </h1>
    
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
        <textarea type="text" placeholder="message" required name="message" />
        {/* <button id="email-submit" type="submit" value="Submit" /> */}
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Email;
