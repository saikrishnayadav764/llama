import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDisplay from "./pages/ProjectDisplay";
import ProductUploadPage from "./pages/ProductUploadPage";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import TranscriptEditor from "./components/TranscriptEditor";
import NotFoundPage from "./pages/NotFoundPage"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/display" element={<ProjectDisplay />} />
          <Route path="/upload" element={<ProductUploadPage />} />
          <Route path="/projects" element={<ProjectDisplay />} />
          <Route path="/transcript" element={<TranscriptEditor />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
