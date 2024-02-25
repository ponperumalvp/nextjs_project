import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onclick, children, variant, link, className }) => {
  return (
    <div className=" w-[100%] ">
      <Link to={link}>
        <button onClick={onclick} className="button">
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
