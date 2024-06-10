import React from "react";
import { Link } from "react-router-dom";
function RightNav({ path,title="Project" }) {
  return (
    <div className="right-nav-wrap">
      <div className="right-nav">
        <div className="right-nav-left">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img className="home-icon" alt="home" src="./home-icon.png" />
        </Link>
          {path === "Account Settings" ? (
            <p className="project-name">
              <span> /</span>
            </p>
          ) : (
            <p className="project-name">
              <span> / </span>{title}<span> /</span>
            </p>
          )}

          <p className="upload-text">{path}</p>
        </div>
        <div className="right-nav-right">
          <div className="country-wrap">
            <img className="triangle" alt="triangle" src="./triangle.png" />
            <p>EN</p>
            <img className="country" alt="country" src="./country.png" />
          </div>
          <img className="bell-icon" alt="bell" src="./bell.png" />
        </div>
      </div>
    </div>
  );
}

export default RightNav;
