import "./style.css";
import project_banner from "../../asset/projects.png";

function Home() {
  return (
    <div className="content-container">
      <div className="top-bar-container">
        <h1>Computer Engineer</h1>
        <p>
          <a href="mailto:dhruvihl369@gmail.com">Contact Me</a>
        </p>
      </div>
      <div className="content">
        <div className="wrapper-container">
          <div className="small-container">
            <div className="container small">
              <b>3 years</b> <br />
              Developing Experience
            </div>
            <div className="container small">
              Full Stack <br />
              Developer
            </div>
          </div>

          <div className="container large">
            <h2>Featured Projects</h2>
            <a href="#/">View All</a>
            <img
              src={project_banner}
              alt="project_banner"
              id="project_banner"
            />
          </div>
        </div>
        <div className="wrapper-container">
          <div className="container medium">
            <h2>Expertise Area</h2>
            <ul>
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Website Design</li>
              <li>Technical Support</li>
            </ul>
          </div>
          <div className="container medium">
            <h2>Recommendations</h2>
            <ul>
              <li>Pat</li>
              <li>Baljeet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
