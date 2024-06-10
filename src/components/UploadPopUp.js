import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/popup.css";

function UploadPopUp({ onCancel, source, title }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isUploaded, setIsUploaded] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isValidUrl, setIsValidUrl] = useState(true); 
  const navigate = useNavigate();

  function returnPng() {
    if (source === "Youtube") {
      return "./youtube.png";
    }
    if (source === "Spotify") {
      return "./spotify.png";
    }
    if (source === "RSS") {
      return "./rss.png";
    }
  }

  const validateYouTubeUrl = (url) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  const postData = async () => {
    if (!validateYouTubeUrl(link)) {
      setIsValidUrl(false);
      return;
    }

    try {
      setIsLoading(true); 
      const response = await fetch("https://llama-server.onrender.com/transcribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          link: link,
          source: "Youtube",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsUploaded(true);
      onCancel();
      navigate('/upload', { state: { title: title } });
    } catch (error) {

      console.error("There was a problem with your fetch operation:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleCancel = () => {
    setIsUploaded(false); 
    onCancel();
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    if (!isValidUrl) {
      setIsValidUrl(true); 
    }
  };

  return (
    <div className="popup-wrapper">
      {isLoading ? (
        <div className="loading-popup">
          <p style={{ color: "white" }}>Uploading...</p>
        </div>
      ) : isUploaded ? null : (
        <div className="upload-popup">
          <div className="popup-header-wrap">
            <img className="social-icons" src={`${returnPng()}`} alt={`${source} icon`} />
            <h1 className="popup-header">Upload from {source}</h1>
          </div>

          <label id="name">Name</label>
          <input
            className="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label id="link">Link</label>
          <input
            className="name-input"
            type="text"
            value={link}
            onChange={handleLinkChange}
          />
          {!isValidUrl && <p className="alert" style={{ color: "red" }}>Please enter a valid YouTube URL.</p>}
          <div className="upload-btn">
            <button className="upload-cancel" onClick={handleCancel}>
              <img src="./cancel.png" alt="cancel icon" />
            </button>
          </div>
          <div className="uploadPopup-btn">
            <button onClick={postData}>Upload</button>
          </div>
        </div>
      )}
      <div className="backdrop"></div>
    </div>
  );
}

export default UploadPopUp;
