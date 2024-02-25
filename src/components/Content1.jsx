import React from "react";
import computerImg from "../assets/computerImg.png";
import * as Hi from "react-icons/hi";
import Button from "./button/Button.jsx";
import "../style/Content1.css";

const Content1 = ({ item }) => {
  return (
    <div>
      <div className="box-size">
        <div className="item1">
          <h2>{item.id}</h2>
          <img src={computerImg} alt="computerImg" />
          <p>{item.name}</p>
        </div>
        <div className="item2">
          <div className="content1">
            <span>{item.paragraphBold}</span>
            {item.paragraph}
          </div>
          <div className="content2">
            <h3>Main highlights</h3>
            <p dangerouslySetInnerHTML={{ __html: item.mainHighlight }}></p>
          </div>
          <div className="content3">
            <p>Show more</p>
            <span>
              <Hi.HiOutlineChevronDown className="arrow-icon" />
            </span>
          </div>
        </div>
        <div className="item3">
          <div className="item3Box">
            <h1>{item.rating}</h1>
            <h5>{item.review}</h5>
            <p>image</p>
          </div>
          <div className="button">
            <Button children="View" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
