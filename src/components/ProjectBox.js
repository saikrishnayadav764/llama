import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectBox({ title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/mainpage',
      {state: { title: title }}
    );
  };

  return (
    <div className="projectBox" onClick={handleClick}>
      <div className="box-header">
        <p>PJ</p>
      </div>
      <div className="box-sub">
        <div>
          <p className="box-title">{title}</p>
          <p className="box-episodes">4 Episodes</p>
        </div>
        <p className="box-edit">Last edited a week ago</p>
      </div>
    </div>
  );
}

export default ProjectBox;
