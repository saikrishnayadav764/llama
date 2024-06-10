import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TranscriptEditor.css';

const TranscriptEditor = ({ transcriptionid }) => {
  const [editMode, setEditMode] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [transcriptData, setTranscriptData] = useState(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await axios.get(`https://llama-server.onrender.com/transcriptions/${transcriptionid}`);
        const { transcripted } = response.data;
        setTranscriptData(response.data);
        setTranscriptText(transcripted);
      } catch (error) {
        console.error('Error fetching transcript:', error);
      }
    };

    fetchTranscript();

    return () => {
      setTranscriptData(null);
      setTranscriptText('');
    };
  }, [transcriptionid]);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const handleDiscard = () => {
    setEditMode(false);
  };

  const handleSaveAndExit = async () => {
    try {
      await axios.put(`https://llama-server.onrender.com/transcriptions/${transcriptionid}`, {
        transcripted: transcriptText
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error saving transcript:', error);
    }
  };

  const handleTranscriptChange = (event) => {
    setTranscriptText(event.target.innerText);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Edit Transcript</h2>
        {editMode && (
          <div className="buttons">
            <button className="discard" onClick={handleDiscard}>Discard</button>
            <button className="save" onClick={handleSaveAndExit}>Save & exit</button>
          </div>
        )}
      </div>
      <div className="transcript">
        <div className="edit-mode" onClick={handleEditModeToggle}>
          <img style={{ width: "10px" }} src="./edit.png" />
          <button >
            {editMode ? "Exit Edit Mode" : "Edit Mode"}
          </button>
        </div>
        <div className="tcontent" contentEditable={editMode} onBlur={handleTranscriptChange}>
          <p className="speaker">Speaker</p>
          <p>{transcriptText}</p>
        </div>
      </div>
    </div>
  );
}

export default TranscriptEditor;
