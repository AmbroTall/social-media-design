import { Button } from "@mui/material";
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <span className="login-text">
          Welcome to <span className="logo-login">Ambro</span> Social Media.
          Connect with friends, family all over
        </span>
      </div>
      <div className="right">
        <input type="text" placeholder="Username" className="email" />
        <input type="password" placeholder="Password" className="password" />
        <Button
          variant="contained"
          sx={{
            width: "300px",
            padding: "15px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          Login
        </Button>
        <span className="sign-up">
          Don't have an account? <a href="/">Sign Up</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
