import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import PopUp from "../components/PopUp";
import "../styles/homepage.css";

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateButtonClick = () => {
    setShowPopup(true);
  };

  const handleCancelButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="HomePage">
      <NavBar/>
      <div className="content">
        <h1 className="homeheader">Create a New Project</h1>
        <img draggable="false" className="sitting" src="./sitting.png" alt="sitting" />
        <p className="content-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <button className="create-btn" onClick={handleCreateButtonClick}>
          <div className="btn-sub">
            <img id="plus" src="./plus.png" />
            <p>Create a New Project</p>
          </div>
        </button>
      </div>
      {showPopup && <PopUp  onCancel={handleCancelButtonClick} />}
    </div>
  );
}

export default HomePage;
