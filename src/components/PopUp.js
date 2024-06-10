import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/popup.css";

function PopUp({ onCancel }) {
  const [projectName, setProjectName] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (projectName.trim() === '') {
      setAlertVisible(true);
      return;
    }
    setIsLoading(true); 
    try {
      const response = await axios.post('https://llamab.onrender.com/api/projects', {
        title: projectName,
      });
      console.log('Project created successfully:', response.data);
      setIsSuccess(true); 
      setTimeout(() => {
        onCancel();
        navigate("/display");
      }, 2000); 

    } catch (error) {
      console.error('There was an error creating the project:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleChange = (event) => {
    setProjectName(event.target.value);
    if (alertVisible) {
      setAlertVisible(false);
    }
  };

  return (
    <div className='popup-wrapper'>
      <div className='popup'>
        <h1 className='popup-header'>Create Project</h1>
        <label id='name'>Enter Project Name:</label>
        <input 
          className='name-input' 
          placeholder='Type here' 
          type='text' 
          value={projectName} 
          onChange={handleChange}
        />
        {alertVisible && <p className='alert'>Project Name Can't be empty</p>}
        {isLoading && <p className='alert'>Creating project...</p>}
        {isSuccess && <p className='alert'>Project created successfully!</p>}
        <div className='btns'>
          <button className='cancel' onClick={onCancel}>Cancel</button>
          <button className='create' onClick={handleCreate} disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </div>
      <div className='backdrop' onClick={onCancel}></div>
    </div>
  );
}

export default PopUp;
