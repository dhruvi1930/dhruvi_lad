import "./style.css";

function Resume() {
  return (
    <div className="content-container">
      <div className="top-bar-container">
        <h1>Resume</h1>
      </div>
      <div className="container">
        <div className="title-container">Experiences</div>
        <div className="content">
          <div className="description">
            <p>Full Stack Developer (Northern Devs)</p>
            <p>Kitchener (Jan 2023 - Mar 2024)</p>
          </div>
          <div className="description">
            <p>Line Cook (Kelsey's Original Roadhouse)</p>
            <p>Waterloo (Jun 2022 - Apr 2023)</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title-container">Education</div>
        <div className="content">
          <div className="description">
            <p>Bachelor's of Technology</p>
            <p>(Computer Engineering)</p>
            <p>Birla Vishkarma Mahavidhyalya, Anand, India </p>
          </div>
          <div className="description">
            <p>Post Graduate</p>
            <p>(Mobile Solutions Development)</p>
            <p>Conestoga College, Waterloo, Canada</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title-container">Skills</div>
        <div className="content">
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
