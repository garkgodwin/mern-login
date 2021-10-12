import React from "react";

//?IMAGES
import { ReactComponent as Logo } from "./Logo.svg";

//?STYLES
import "./Navbar.css";

export default function Navbar({ userData }) {
  return (
    <div className="Navbar">
      <div className="navbar navbar-brand">
        <Logo />
        <h2 className="brand-title">GG Login</h2>
      </div>
      {userData && (
        <div className="navbar navbar-profile">
          <h3>{userData.username}</h3>
        </div>
      )}
    </div>
  );
}
