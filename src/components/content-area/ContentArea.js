import "./style.css";

function ContentArea() {
  return (
    <div className="content-container">
      <div className="top-bar-container">
        <h1>Computer Engineer</h1>
        <p>
          <a href="mailto:dhruvihl369@gmail.com">Contact Me</a>
        </p>
      </div>

      <div className="top-content-container">
        <div className="small-container">
          <div className="experience-container">
            2 year developing experience
          </div>
          <div className="profession-container">Full Stack Developer</div>
        </div>
        <div className="expertise-container">
          <ul>
            <li>Web Development</li>
            <li>Web Design</li>
            <li>Website Design</li>
            <li>Technical Support</li>
          </ul>
        </div>
      </div>

      {/* <div>
        <div className="project-container"></div>
        <div className="recommendation-container"></div>
      </div> */}
    </div>
  );
}

export default ContentArea;
