import React from "react";
import "./Login.css";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container"></div>
      <div className="login">
        <form>
          <h1>Sign In</h1>
          <input type="email" name="email" placeholder="Email Address" id="" />
          <input type="password" name="password" placeholder="Password" id="" />

          <button className="submit-btn">Sign In</button>
          <p className="forget-password">
            <small>Forgot your password?</small>
          </p>
        </form>
        <div className="hr">
          <hr />
          <small> or </small>
        </div>
        <div className="sign-with-social-media">
          <h2>Sign In With Social Media Account</h2>
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
          Don't have an account?{" "}
          <Link to="/register">
            <span className="register-link">Register Now!</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
