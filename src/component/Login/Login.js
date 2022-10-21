import React, { useContext, useState } from "react";
import "./Login.css";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { AuthContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: `Login Successful!`,
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  return (
    <>
      <div className="login-container"></div>
      <div className="login">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>
          <input
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            required
          />

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
