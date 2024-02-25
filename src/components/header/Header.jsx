import React from "react";
import "../../style/Header.css";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <div className="item">
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
