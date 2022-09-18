import React from "react";
import "./topbar.css";
import image from './logo.jpg'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EASIFY</span>
        </div>
        <div className="topRight">
          
          <img src={image} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
