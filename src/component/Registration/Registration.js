import React, { useContext, useState } from "react";
import "./Registration.css";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FiEyeOff, FiEye} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";

const Registration = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password !== confirm){
      Swal.fire({
        icon: "error",
        title: "Password didn't match. Try Again",
      });
      return;
    }

    createUser(email, password)
    .then(result => {
      result.user.displayName = name;
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: `Hello, ${name}`,
        text: "Registration Successful!",
        showConfirmButton: true,
        timer: 1500,
      });
      navigate(from, {replace:true});
    })
    .catch(error=>{
      console.error("error shows: ", error);
    })
  };
  return (
    <>
      <div className="login-container"></div>
      <div className="login">
        <form onSubmit={handleRegister}>
          <h1>Register Now</h1>
          <input type="text" name="name" placeholder="Your Name" required />
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
            className="password1"
            required
          />
          <span
            onClick={() => {
              setShow2(!show2);
            }}
          >
            {show2 ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>
          <input
            type={`${show2 ? "text" : "password"}`}
            name="confirm"
            placeholder="Confirm Password"
            className="password2"
            required
          />
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
          Already have an account?
          <Link to="/login">
            <span className="register-link"> Log In Now!</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
