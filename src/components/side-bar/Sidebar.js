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
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img src={logo} alt="dhruvi lad" />
        <p>Dhruvi Lad</p>
      </div>
      <div className="menu-container">
        <NavLink className="menu" exact to="/" activeClassName="active">
          <FontAwesomeIcon icon={faCoffee} />
          <p>Home</p>
        </NavLink>
        <NavLink className="menu" to="/resume" activeClassName="active">
          <FontAwesomeIcon icon={faBook} />
          <p>Resume</p>
        </NavLink>
        <NavLink className="menu" to="/experience" activeClassName="active">
          <FontAwesomeIcon icon={faGear} />
          <p>Experience</p>
        </NavLink>
        <NavLink className="menu" to="/projects" activeClassName="active">
          <FontAwesomeIcon icon={faDatabase} />
          <p>Projects</p>
        </NavLink>
        <NavLink className="menu" to="/about" activeClassName="active">
          <FontAwesomeIcon icon={faEarth} />
          <p>About</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
