import React from "react";
import "../../style/Header.css";
import * as Ci from "react-icons/ci";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <div className="item">
          <Ci.CiSearch className="search-icon" />
          <input type="text" className="input" />
          <h5>Categories</h5>
          <h5>Website Builders</h5>
          <h5>Today's deals</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
