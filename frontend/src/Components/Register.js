import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
// import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/client", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      // Navigate to landing page after successful registration
      navigate("/landing");
    } catch (error) {
      console.error("Registration failed:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="shyam">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="text"
            id="text"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            id="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
        </div>

        <button type="submit">Register</button>
        <div className="register">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;