import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Header from "./components/header/Header";
import { content, content2 } from "./utils/content";
import * as Ti from "react-icons/ti";
import * as Hi from "react-icons/hi";
import * as Md from "react-icons/md";
import Footer from "./components/footer/Footer";

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
      {content.map((item, idx) => {
        return (
          <div key={idx} className="content">
            <div></div>
            <Content1 item={item} />
          </div>
        );
      })}
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
      <Footer />
    </main>
  );
}

export default App;
