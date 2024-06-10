import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TranscriptEditor from "../components/TranscriptEditor";
import RightNav from "../components/RightNav";


function Transcript({transcription}) {
  const [showPopup, setShowPopup] = useState(false);
  const [curr, setCurr] = useState(1);
  const {state} = useLocation();
  // const { title } = state;
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
        <div className="right-part">
          <RightNav  path="Transcript"/>
          <TranscriptEditor transcriptionid={transcription}/>

        </div>
    );
    return myelement
  }

  return (
    <>
      {displayContent()}
    </>
  );
}

export default Transcript;
