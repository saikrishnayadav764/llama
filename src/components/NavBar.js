import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navleft">
          <img draggable="false" className="logo" src="./logo.png" alt="logo" />
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <p>LAMA.</p>
          </Link>
        </div>
        <div className="navright">
          <img
            draggable="false"
            className="setting"
            src="./setting.png"
            alt="setting"
          />
          <img draggable="false" className="bell" src="./bell.png" alt="bell" />
        </div>
      </nav>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="homeplace">
          <img draggable="false" src="./home.png" alt="backtohome" />
          <p>Back to home</p>
        </div>
      </Link>
    </>
  );
}

export default NavBar;
