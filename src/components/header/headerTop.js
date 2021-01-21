import React from "react";
import './header.css'
import Logo from "../logoComponents/headerLogo.png";
import { Link } from "react-router-dom";

export default function HeaderCenter() {
  return (
    <>
    <div className="top-header">
      <Link to="/" className="topHeader">
        <div className="logo">
          <img src={Logo} />
        </div>
      </Link>
    </div>
    </>
  );
}


