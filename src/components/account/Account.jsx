import React from "react";
import Card from "../card/Card";
import Post from "../post/Post";
import "./account.css";

const Account = () => {
  return (
    <div className="account">
      <div className="account-profile">
        <img src="/assets/ambro.png" alt="" className="bg-image" />
        <img src="/assets/ambro.png" alt="" className="prof-img" />
      </div>
      <div className="name-prof">
        <span className="name">Ndone</span>
        <span className="handle">@Wamaploty</span>
      </div>
      <Post />
      <Card />
      <Card />
    </div>
  );
};

export default Account;
