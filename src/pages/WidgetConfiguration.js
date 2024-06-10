import React, { useState } from "react";
import RightNav from "../components/RightNav";
import General from "../components/General";
import Display from "../components/Display";

function WidgetConfiguration() {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  function displayContent() {
    const myelement = (
          <div className="right-part">
            <RightNav path="Widget Configuration"/>
            <h1 className="upload-head">Configuration</h1>

            <div className="tabs-container">
              <div className="tabs">
                <div
                  className={`tab ${activeTab === "General" ? "active" : ""}`}
                  onClick={() => handleTabClick("General")}
                >
                  General
                </div>
                <div
                  className={`tab ${activeTab === "Display" ? "active" : ""}`}
                  onClick={() => handleTabClick("Display")}
                >
                  Display
                </div>
                <div
                  className={`tab ${activeTab === "Advanced" ? "active" : ""}`}
                  onClick={() => handleTabClick("Advanced")}
                >
                  Advanced
                </div>
              </div>
            </div>
            <div className="tab-content">
              {activeTab === "General" && <General />}
              {activeTab === "Display" && <Display />}
              {activeTab === "Advanced" && <div>Advanced Content</div>}
            </div>
          </div>
      );
      return myelement
    }
  

  return (
    <>
{/* <div className="right-part"> */}
      {/* <SideNav setCurrent={setCurrent} /> */}
      {displayContent()}
{/* </div> */}
    </>
  );
}

export default WidgetConfiguration;
