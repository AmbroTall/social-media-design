import React from "react";
import Middle from "../../components/middlebar/Middle";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <SideBar />
      <Middle />
      <RightBar />
    </div>
  );
};

export default Home;
