import React from "react";
import "./Footer.css";
import logom from "../images/logom.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <h2>Contact Us</h2>
        <h3>+917 56 834 2349</h3>
        <h4>business@email.com</h4>
      </div>

      <div className="middle">
        <img src={logom} />
      </div>
    </div>
  );
};

export default Footer;
