import "./style.css";
function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="experience-container">
        <h3>Experience</h3>
        <div className="main-container">
          <div className="description">
            <p>Full Stack Developer (Northern Devs)</p>
            <p>
              Kitchener <span>(Jan 2023 - Mar 2024)</span>
            </p>
          </div>
          <div className="description">
            <p>Line Cook (Kelsey's Original Roadhouse)</p>
            <p>
              Waterloo <span>(Jun 2022 - Apr 2023)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="education-container">
        <h3>Education</h3>
        <div className="main-container">
          <div className="description">
            <p>Bachelor's of Technology</p>
            <p>(Computer Engineering)</p>
            <br />
            <p>
              Birla Vishkarma <br /> Mahavidhyalya, Anand, India
            </p>
            <span>(Jul 2017 - Jun 2021)</span>
          </div>
          <div className="description">
            <p>Post Graduate</p>
            <p>(Mobile Solutions Development)</p>
            <br />
            <p>
              Conestoga College,
              <br /> Waterloo, Canada
            </p>
            <span>(May 2022 - Aug 2023)</span>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <h3>Skill</h3>
        <div className="main-container">
          <div className="description">
            <ul>
              <li>Programming Language</li>
              <li>Web Development</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="description">
            <ul>
              <li>Troubleshooting</li>
              <li>Database</li>
              <li>SDLC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
