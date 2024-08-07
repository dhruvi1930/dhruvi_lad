import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../asset/logo.jpg";
import {
  faBook,
  faDatabase,
  faEarth,
  faGear,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img src={logo} alt="dhruvi lad" />
        <p>Dhruvi Lad</p>
      </div>
      <div className="menu-container">
        <div className="menu">
          <FontAwesomeIcon icon={faCoffee} />
          <p>Home</p>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faBook} />
          <p>Education</p>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faGear} />
          <p>Experience</p>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faDatabase} />
          <p>Projects</p>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faEarth} />
          <p>About</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
