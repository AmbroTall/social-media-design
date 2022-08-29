import { Search } from "@mui/icons-material";
import React from "react";
import Trends from "../trends/Trends";
import "./rightbar.css";

const RightBar = () => {
  return (
    <div className="rightbar-container">
      <div className="search-bar">
        <Search sx={{ fontWeight: "200" }} />
        <input
          type="text"
          placeholder="Search Ambro"
          className="search-input"
        />
      </div>
      <Trends />
      <div className="footer">
        <span className="footer-words">
          Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
          More © 2022 Ambro, Inc.
        </span>
      </div>
    </div>
  );
};

export default RightBar;
