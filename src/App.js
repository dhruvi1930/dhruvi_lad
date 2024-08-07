import "./App.css";
import Sidebar from "./components/side-bar/Sidebar";
import ContentArea from "./components/content-area/ContentArea";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container ">
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
