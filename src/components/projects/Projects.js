import Application_Tracker from "../../asset/Application Tracker.png";
import ImaginifyAI from "../../asset/ImaginifyAI.png";
import Black_Friday_Trends from "../../asset/BlackfridayTrends.png";
import Marry_Me from "../../asset/Marry Me.png";
import Jelly_Beans from "../../asset/Jelly Beans.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="wrapper-main-container">
        <div className="wrapper-container">
          <img src={Application_Tracker} alt="Application Tracker" />
          <h4>Application Tracker</h4>
          <div className="skills-container">
            <span>React</span>
            <span>TypeScript</span>
            <span>Styled-Component</span>
            <span>Firebase</span>
          </div>
          <FontAwesomeIcon icon={faLink} className="link-icon" size="xs" />
        </div>
        <div className="wrapper-container">
          <img src={Marry_Me} alt="Marry Me" />
          <h4>Marry Me</h4>
          <div className="skills-container">
            <span>HTML</span>
            <span>CSS</span>
            <span>Figma</span>
            <span>Webflow</span>
          </div>
          <FontAwesomeIcon icon={faLink} className="link-icon" size="xs" />
        </div>
        <div className="wrapper-container">
          <img src={Black_Friday_Trends} alt="Black Friday Trends" />
          <h4>Black Friday Trends</h4>
          <div className="skills-container">
            <span>Python</span>
            <span>jupyter notebook</span>
            <span>Numpy</span>
            <span>Pandas</span>
            <span>matplotlib</span>
          </div>
          <FontAwesomeIcon icon={faLink} className="link-icon" size="xs" />
        </div>
        <div className="wrapper-container">
          <img src={ImaginifyAI} alt="ImaginifyAI" />
          <h4>ImaginifyAI</h4>
          <div className="skills-container">
            <span>React</span>
            <span>MongoDB</span>
            <span>Node Js</span>
          </div>
          <FontAwesomeIcon icon={faLink} className="link-icon" size="xs" />
        </div>
        <div className="wrapper-container">
          <img src={Jelly_Beans} alt="Jelly Beans" />
          <h4>Jelly Beans</h4>
          <div className="skills-container">
            <span>Vanila JavaScript</span>
            <span>HTML</span>
            <span>Css</span>
          </div>
          <FontAwesomeIcon icon={faLink} className="link-icon" size="xs" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
