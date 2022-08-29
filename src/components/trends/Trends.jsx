import { MoreHorizOutlined } from "@mui/icons-material";
import React from "react";
import "./trend.css";

const Trends = () => {
  return (
    <div className="trends">
      <h2 className="trend-title">Trends for you</h2>
      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>

      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>

      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>

      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>

      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>

      <div className="trend-div">
        <div className="top-element">
          <span className="trend-type">Trending in Kenya</span>
          <MoreHorizOutlined sx={{ cursor: "pointer" }} />
        </div>
        <h4 className="trending">President-elect</h4>
        <span className="no-tweets">14.5K Tweets</span>
      </div>
    </div>
  );
};

export default Trends;
