import React from "react";

//?IMAGES
import { ReactComponent as Logo } from "./Logo.svg";

//?STYLES
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar navbar-brand">
        <Logo />
        <h2 className="brand-title">GG Login</h2>
      </div>
    </div>
  );
}
