import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import VideoRecordPage from "./pages/VideoRecordPage";
import './App.css';

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="*" element={<Navigate to="/videoRecord" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/videoRecord" element={<VideoRecordPage />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
