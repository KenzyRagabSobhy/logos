import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./App.css";
import logo from "./logo.png";
function App() {
  return (
    <div className="page">
      <div className="circle-layout">

        {/* Center Image */}
        <div className="center-image">
          <img src={logo} alt="My Brand" />
        </div>

        {/* Social Icons */}
        <a
          href="https://web.facebook.com/sinai.oils"
          target="_blank"
          rel="noreferrer"
          className="icon facebook"
          style={{ transform: "rotate(-20deg) translate(120px) rotate(20deg)" }}
        >
           <div className="float">
          <FaFacebookF />
          </div>
        </a>

        <a
          href="https://www.instagram.com/dahabnaturalroyal"
          target="_blank"
          rel="noreferrer"
          className="icon instagram"
          style={{ transform: "rotate(105deg) translate(120px) rotate(-105deg)" }}
        >
           <div className="float">
          <FaInstagram />
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@dahab.natural.roy"
          target="_blank"
          rel="noreferrer"
          className="icon tiktok"
          style={{ transform: "rotate(195deg) translate(180px) rotate(-195deg)" }}
        >
           <div className="float">
          <FaTiktok />
          </div>
        </a>

      </div>
    </div>
  );
}

export default App;