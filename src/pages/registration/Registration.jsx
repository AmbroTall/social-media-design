import { Button } from "@mui/material";
import React from "react";
// import "./registration.css";

const Registration = () => {
  return (
    <div className="login">
      <div className="left">
        <span className="login-text">
          Welcome to <span className="logo-login">Ambro</span> Social Media.
          Connect with friends, family all over
        </span>
      </div>
      <div className="right">
        <input type="username" placeholder="Username" className="email" />
        <input type="email" placeholder="Password" className="password" />
        <input type="password" placeholder="Password" className="password" />
        <input
          type="password"
          placeholder="confirm password"
          className="password"
        />
        <Button
          variant="contained"
          sx={{
            width: "300px",
            padding: "15px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          Register
        </Button>
        <span className="sign-up">
          Already have an account? <a href="/">Sign In</a>
        </span>
      </div>
    </div>
  );
};

export default Registration;
