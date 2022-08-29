import {
  BookmarkBorder,
  HomeOutlined,
  ListAltOutlined,
  MailOutline,
  MoreHorizOutlined,
  NotificationsNone,
  PermIdentityOutlined,
  Tag,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <h1 className="logo">Ambro</h1>
      <ul className="sidebar-list">
        <li className="sidebar-items">
          <div className="icon-container">
            <HomeOutlined className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Home</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <Tag className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Explore</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <NotificationsNone className="icon" />
            <div className="dot-active-not">2</div>
          </div>
          <span className="sidbar-item-text">Notifications</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <MailOutline className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Messages</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <BookmarkBorder className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Bookmarks</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <ListAltOutlined className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Lists</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <PermIdentityOutlined className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">Profile</span>
        </li>
        <li className="sidebar-items">
          <div className="icon-container">
            <MoreHorizOutlined className="icon" />
            <div className="dot-active"></div>
          </div>
          <span className="sidbar-item-text">More</span>
        </li>
      </ul>
      <Button
        variant="contained"
        sx={{ borderRadius: "40px", padding: "20px 0", margin: "5px 0" }}
        className="side-tweet-btn"
      >
        Tweet
      </Button>
      <div className="profile-sidebar">
        <div className="profile-info">
          <img src="/assets/ambro.png" alt="profile" className="profile-img" />
          <div className="profile-name">
            <span className="name">Ndone</span>
            <span className="handle">@Wamaploty</span>
          </div>
        </div>
        <MoreHorizOutlined className="prof-icon" />
      </div>
    </div>
  );
};

export default SideBar;
