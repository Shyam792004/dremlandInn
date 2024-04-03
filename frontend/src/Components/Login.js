// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegularLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/landing");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "google@example.com") {
      alert("Google login successful!");
      // Handle Google login
    } else {
      handleRegularLogin();
    }
  };

  return (
    <div className="shyam">
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <Link to="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">
            #Forget Password
          </Link>
        </div>
        <button type="submit">Log in</button>
        <div className="register">
          Don't have an account <Link to="/register">Register</Link>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;