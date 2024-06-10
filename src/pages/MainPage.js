import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import RightNav from "../components/RightNav";
import UploadBox from "../components/UploadBox";
import WidgetConfiguration from "./WidgetConfiguration";
import AccountSettings from "./AccountSettings";
import UploadPopUp from "../components/UploadPopUp";


function MainPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [curr, setCurr] = useState(1);
  const {state} = useLocation();
  let title = "Sample Project";
  if (state && state.title) {
    title = state.title;
  }

  const setCurrent = (id) => {
    setCurr(id);
  };

  const handleCreateButtonClick = () => {
  setShowPopup(true);
};

const handleCancelButtonClick = () => {
  setShowPopup(false);
};

  function displayContent() {
    const myelement = (
      <div className="cnt">
        {curr === 3
          ? "Deployment"
          : "Pricing"}
      </div>
    );
    if(curr===2){
      return <WidgetConfiguration/>
    }

    if(curr===5){
      return <AccountSettings/>
    }

    if (curr === 1) {
      return (
        <>
          <div className="right-part">
            <RightNav title={title} path="Upload"/>
            <h1 className="upload-head">Upload</h1>
            <div className="uploads">
              <UploadBox src="Youtube" txt="Youtube Video" im="./youtube.png" />
              <UploadBox src="Spotify" txt="Spotify Podcast" im="./spotify.png" />
              <UploadBox src="RSS" txt="RSS Feed" im="./rss.png" />
              <UploadBox src="Youtube" txt="Youtube Video" im="./youtube.png" />
              <UploadBox src="Spotify" txt="Spotify Podcast" im="./spotify.png" />
              <UploadBox src="RSS" txt="RSS Feed" im="./rss.png" />
            </div>
            <p className="middle">or</p>
            <div onClick={handleCreateButtonClick} className="upload-file">
              <img className="upload-img" src="./upload.png" />
              <p>
                Select a file or drag and drop here (Podcast Media or
                Transcription Text)
              </p>
              <p className="formats">
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
              </p>
              <button className="selectFile">Select File</button>
            </div>
            {showPopup && <UploadPopUp title={title} source="Youtube"  onCancel={handleCancelButtonClick} />}
          </div>
        </>
      );
    }

    if (curr >= 3) {
      return <>{myelement}</>;
    }
  }

  return (
    <div className="main-page">
      <SideNav setCurrent={setCurrent} />
      {displayContent()}
    </div>
  );
}

export default MainPage;
