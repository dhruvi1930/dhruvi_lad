import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Sidebar from "./components/side-bar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
