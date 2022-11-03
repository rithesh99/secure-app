import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoRecordPage from "./pages/VideoRecordPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/videoRecord" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoRecordPage />} />
        <Route path="/image" element={<VideoRecordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
