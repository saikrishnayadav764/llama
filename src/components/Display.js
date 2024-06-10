import React, { useState } from "react";
import "../styles/display.css";

function Display() {
  const [primaryColor, setPrimaryColor] = useState("#7BD568");
  const [fontColor, setFontColor] = useState("#3C3C3C");
  const [fontSize, setFontSize] = useState(25);
  const [chatHeight, setChatHeight] = useState("Lorem Ipsum");
  const [showSources, setShowSources] = useState(true);
  const [chatIconSize, setChatIconSize] = useState("small");
  const [positionOnScreen, setPositionOnScreen] = useState("bottom-right");
  const [distanceFromBottom, setDistanceFromBottom] = useState(20);
  const [horizontalDistance, setHorizontalDistance] = useState(20);
  const [botIcon, setBotIcon] = useState(null);

  const handleFileChange = (e) => {
    setBotIcon(URL.createObjectURL(e.target.files[0]));
  };

  const triggerFileInput = () => {
    document.getElementById("bot-icon-upload").click();
  };

  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label>Primary Color</label>
          <div className="color-input">
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{ width: "calc(100% - 60px)" }}
            />
            <input
              type="color"
              value={primaryColor}
              style={{ width: "40px" }}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Font Color</label>
          <div className="color-input">
            <input
              type="text"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              style={{ width: "calc(100% - 60px)" }}
            />
            <input
              type="color"
              value={fontColor}
              style={{ width: "40px" }}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Font Size (in px)</label>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Chat Height (in % of total screen)</label>
          <input
            type="text"
            value={chatHeight}
            onChange={(e) => setChatHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group toggle">
        <label>Show Sources</label>
        <input
          type="checkbox"
          checked={showSources}
          onChange={(e) => setShowSources(e.target.checked)}
        />
      </div>
      <h4 className="heads chat-head">Chat Icon</h4>
      <div className="form-row">
        <div className="form-group">
          <label>Chat Icon Size</label>
          <select
            value={chatIconSize}
            onChange={(e) => setChatIconSize(e.target.value)}
          >
            <option value="small">Small (48x48 px)</option>
            <option value="medium">Medium (72x72 px)</option>
            <option value="large">Large (96x96 px)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Position on Screen</label>
          <select
            value={positionOnScreen}
            onChange={(e) => setPositionOnScreen(e.target.value)}
          >
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Distance from Bottom (in px)</label>
          <input
            type="number"
            value={distanceFromBottom}
            onChange={(e) => setDistanceFromBottom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Horizontal Distance (in px)</label>
          <input
            type="number"
            value={horizontalDistance}
            onChange={(e) => setHorizontalDistance(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group file-upload">
        <label>Bot Icon</label>
        <div className="bot-upload-container">
          <div className="icon-preview-container">
            {botIcon ? (
              <img src={botIcon} alt="Bot Icon" className="preview" />
            ) : (
              <div className="empty-preview"></div>
            )}
          </div>
          <div>
            <button
              style={{ background: "#7E22CE" }}
              className="bot-upload"
              onClick={triggerFileInput}
            >
              <p>Upload Image</p>
              <img alt="upload" src="./uparrow.png" />
            </button>
            <p className="reco">Recommended Size: 48x48px</p>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="bot-icon-upload"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
