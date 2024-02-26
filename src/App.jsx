import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Header from "./components/header/Header";
import { content, content2 } from "./utils/content";
import * as Ti from "react-icons/ti";
import * as Hi from "react-icons/hi";
import * as Md from "react-icons/md";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";

function App() {
  return (
    <main className="App">
      <Header />
      <div className="top">
        <h1>Best Website builders in the US</h1>
        <div className="top1">
          <div>
            <Ti.TiTick />
          </div>
          <p> Last Updated - February 22, 2020 Advertising Disclosure</p>
          <p className="flex ml-96">
            Top Relevant
            <Hi.HiOutlineChevronDown className="arrow-icon" />
          </p>
        </div>
        <div>
          <ul className="ul">
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies </li>
            <li>Tooling</li>
            <li>BlueHosting</li>
          </ul>
        </div>
        <div>
          <ul className="ul">
            <li>Home</li>
            <li>
              <Md.MdKeyboardArrowRight />
            </li>
            <li>Hosting for all</li>
            <li>
              <Md.MdKeyboardArrowRight />
            </li>
            <li>Hosting</li>
            <li>
              <Md.MdKeyboardArrowRight />
            </li>
            <li>Hosting6</li>
            <li>
              <Md.MdKeyboardArrowRight />
            </li>{" "}
            <li>Hosting5</li>
            <li>
              <Md.MdKeyboardArrowRight />
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        {content.map((item, idx) => {
          return (
            <div key={idx}>
              {item.special ? <div className="special">{item.value}</div> : ""}
              <Content1 item={item} />
            </div>
          );
        })}
      </div>
      <h2 className="top">Related deals you might like for</h2>
      <div className="ContentAlign">
        {content2.map((item, idx) => {
          return (
            <div key={idx}>
              <div></div>
              <Content2 item={item} />
            </div>
          );
        })}
      </div>
      <div className="last">
        <div>
          <h2>Sign up and get exclusive special deals</h2>
        </div>
        <div last2>
          <div>
            <input type="text" />
          </div>
          <div className="lastbtn">
            <Button children="Sing Up" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
