import computerImg from "../assets/computerImg.png";
import Button from "./button/Button";
import "../style/Content2.css";

const Content2 = ({ item }) => {
  return (
    <div className="Content2">
      <div className="rowContent">
        <div className="img">
          <img src={computerImg} alt="computerImg" />
        </div>
        <div className="lineOne">
          <span className="percentage">{item.firstLinePart1}</span>
          <span className="percentage2">{item.firstLinePart2}</span>
        </div>
        <p className="bold">{item.secondLine}</p>
        <p className="para">{item.thirdLine}</p>
        <div>
          <span className="span1">{item.fourthLinePart1}</span>
          <span className="span2">{item.fourthLinePart2}</span>
          <span className="span3">{item.fourthLinePart3}</span>
        </div>
        <div className="bt2">
          <Button children="view" />
        </div>
      </div>
    </div>
  );
};

export default Content2;
