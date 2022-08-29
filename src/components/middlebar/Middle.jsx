import React from "react";
import Card from "../card/Card";
import NavBar from "../navbar/NavBar";
import Post from "../post/Post";
import "./middle.css";

const Middle = () => {
  return (
    <div className="middlebar-container">
      <NavBar />
      <Post />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Middle;
