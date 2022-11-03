import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoTaker from "./pages/VideoRecorder";
import "./App.css";
import ImageTaker from "./pages/ImageTaker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoTaker />} />
        <Route path="/image" element={<ImageTaker />} />
      </Routes>
    </Router>
  );
}

export default App;
