import React from "react";
import './Registration.css';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="login-container"></div>
      <div className="login">
        <form>
          <h1>Register Now</h1>
          <input type="text" name="name" placeholder="Your Name" id="" />
          <input type="email" name="email" placeholder="Email Address" id="" />
          <input type="password" name="password" placeholder="Password" id="" />

          <button className="submit-btn">Register</button>
        </form>
        <div className="hr">
          <hr />
          <small> or </small>
        </div>
        <div className="sign-with-social-media">
          <h2>Register With Social Media Account</h2>
          <div className="sign-in-icons">
            <h2 id="google">
              <FaGoogle /> Google
            </h2>
            <h2 id="github">
              <FaGithub /> Github
            </h2>
            <h2 id="facebook">
              <FaFacebook /> Facebook
            </h2>
            <h2 id="twitter">
              <FaTwitter /> Twitter
            </h2>
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span className="register-link">Log In Now!</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
