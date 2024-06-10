import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import RightNav from "../components/RightNav";
import UploadBox from "../components/UploadBox";
import Transcript from "./Transcript";
import AccountSettings from "./AccountSettings";
import axios from "axios";

// Simple Loader component
const Loader = ({ message }) => <div style={{ fontWeight: "bold" }} className="loader">{message}</div>;

function ProductUploadPage() {
  const [curr, setCurr] = useState(1);
  const [transcriptions, setTranscriptions] = useState([]);
  const [selectedTranscription, setSelectedTranscription] = useState(null);
  const [loading, setLoading] = useState(true); // State for initial loading
  const [deleting, setDeleting] = useState(false); // State for deleting
  const [delid, setDelid] = useState("");
  const { state } = useLocation();
  let title = "Sample Project";
  if (state && state.title) {
    title = state.title;
  }

  const setCurrent = (id) => {
    setCurr(id);
  };

  const handleEditClick = (transcriptionid) => {
    setCurr(6);
    setSelectedTranscription(transcriptionid);
  };

  const handleDeleteClick = (transcriptionid) => {
    setDelid(transcriptionid);
    setDeleting(true);
    axios
      .delete(`https://llama-server.onrender.com/transcriptions/${transcriptionid}`)
      .then((response) => {
        setDeleting(false);
        // Rerun useEffect by setting loading state to true
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error deleting transcription:", error);
        setDeleting(false);
      });
  };

  const refreshTranscriptions = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      axios
        .get("https://llama-server.onrender.com/transcriptions")
        .then((response) => {
          setTranscriptions(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching transcriptions:", error);
          setLoading(false);
        });
    }
  }, [loading]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: '2-digit',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

  function displayContent() {
    const myelement = (
      <div className="cnt">
        {curr === 2
          ? "Edit Transcription"
          : curr === 3
            ? "Choose Platform"
            : "Activate"}
      </div>
    );

    if (selectedTranscription && curr === 6) {
      return (
        <>
          <div className="right-part">
            <Transcript transcription={selectedTranscription} />
          </div>
        </>
      );
    }

    if (curr === 5) {
      return <AccountSettings />
    }

    if (curr === 1) {
      return (
        <>
          <div className="right-part">
            <RightNav title="Project" path="Upload" />
            <h1 className="upload-head">Project</h1>
            <div className="uploads">
              <UploadBox src="Youtube" txt="Youtube Video" im="./youtube.png" />
              <UploadBox
                src="Spotify"
                txt="Spotify Podcast"
                im="./spotify.png"
              />
              <UploadBox src="RSS" txt="RSS Feed" im="./rss.png" />
            </div>
            <button onClick={refreshTranscriptions} className="refresh-button">Refresh</button>
            {loading ? (
              <Loader message="Loading transcriptions..." />
            ) : (
              <table className="upload-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Upload date & Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transcriptions.map((transcription, index) => (
                    <tr key={index}>
                      <td style={{ width: "20%" }}>
                        <p style={{ whiteSpace: "nowrap", width: "70px", overflow: "hidden", textOverflow: "ellipsis" }}>{transcription.name}</p>
                      </td>
                      <td style={{ width: "20%" }}>{formatDate(transcription.upload_date)}</td>
                      <td style={{ width: "20%" }}>{transcription.status}</td>
                      <td style={{ width: "20%" }}>
                        <button
                          className="tedit"
                          onClick={() => handleEditClick(transcription.docid)}
                        >
                          Edit
                        </button>
                        <button
                          className="tdelete"
                          onClick={() => handleDeleteClick(transcription.docid)}
                        >
                          {deleting && delid === transcription.docid ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      );
    }

    if (curr >= 2) {
      return <>{myelement}</>;
    }
  }

  return (
    <div className="main-page">
      <SideNav
        link2="Edit Transcription"
        link3="Choose Platform"
        link4="Activate"
        setCurrent={setCurrent}
      />
      {displayContent()}
    </div>
  );
}

export default ProductUploadPage;
