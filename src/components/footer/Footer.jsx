import React from "react";
import "../../style/Footer.css";
import * as Hi from "react-icons/hi";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <h1>Categories</h1>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex">
          United States <Hi.HiOutlineChevronDown className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
