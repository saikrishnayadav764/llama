import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "../components/PopUp";
import NavBar from "../components/NavBar";
import ProjectBox from "../components/ProjectBox";
import {ThreeDots} from "react-loader-spinner";

function ProjectDisplay() {
  const [showPopup, setShowPopup] = useState(false);
  const [projectTitles, setProjectTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://llamab.onrender.com/api/projects');
        const titles = response.data.map(project => project.title);
        setProjectTitles(titles);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('There was an error fetching the projects:', error);
        setLoading(false); // Also set loading to false in case of an error
      }
    };

    fetchProjects();
  }, [showPopup]);

  const handleCreateButtonClick = () => {
    setShowPopup(true);
  };

  const handleCancelButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <NavBar />
      <div className="display-top">
        <h1 className="display-header">Projects</h1>
        <button className="create-btn" onClick={handleCreateButtonClick}>
          <div className="btn-sub">
            <img id="plus" src="./plus.png" alt="Plus icon" />
            <p>Create a New Project</p>
          </div>
        </button>
      </div>
      {loading ? ( // Display loader if loading is true
        <div style={{display:"flex", justifyContent:"center"}} className="loader">
          <ThreeDots  color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="pboxes">
          {projectTitles.map((title, index) => (
            <ProjectBox key={index} title={title} />
          ))}
        </div>
      )}
      {showPopup && <PopUp onCancel={handleCancelButtonClick} />}
    </div>
  );
}

export default ProjectDisplay;
