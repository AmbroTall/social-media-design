import {
  EqualizerOutlined,
  EventOutlined,
  FmdGoodOutlined,
  GifBoxOutlined,
  PhotoOutlined,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="profile-post-container">
      <div className="profile-post">
        <img
          src="/assets/ambro.png"
          alt="profile"
          className="profile-img"
          style={{ cursor: "pointer" }}
        />
        <input
          type="text"
          placeholder="Whats Happening?"
          className="input-post"
        />
      </div>
      <div className="tweet">
        <div className="post-icons">
          <PhotoOutlined className="post-icon-items" />
          <GifBoxOutlined className="post-icon-items" />
          <EqualizerOutlined className="post-icon-items" />
          <SentimentSatisfiedOutlined className="post-icon-items" />
          <EventOutlined className="post-icon-items" />
          <FmdGoodOutlined className="post-icon-items" />
        </div>
        <Button variant="contained" className="tweet-post">
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default Post;
