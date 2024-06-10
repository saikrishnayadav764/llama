import React, { useState } from "react";


function SideNav({
  setCurrent,
  link1 = "Projects",
  link2 = "Widget Configurations",
  link3 = "Deployment",
  link4 = "Pricing",
  link5 = "Settings",
}) {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
    setCurrent(id);
  };
  return (
    <div className="sidenav-wrap">
      <div className="sidenav">
        <div className="navleft">
          <img draggable="false" className="logo" src="./logo.png" alt="logo" />
          <p>LAMA.</p>
        </div>
        <p className="sidnav-title">Podcast Upload File</p>
        <ul>
          <li
            style={{
              background: `${active === 1 ? "#7E22CE" : "none"}`,
              color: `${active === 1 ? "white" : "black"}`,
            }}
            onClick={() => handleClick(1)}
            className="item"
          >
            <div
              style={{
                background: `${
                  active === 1 ? "black" : "rgba(29, 27, 32, 0.12)"
                }`,
                color: `${active === 1 ? "white" : "black"}`,
                opacity: "0.8",
              }}
              className="num"
            >
              1
            </div>{" "}
            {link1}
          </li>
          <li
            style={{
              background: `${active === 2 ? "#7E22CE" : "none"}`,
              color: `${active === 2 ? "white" : "black"}`,
            }}
            onClick={() => handleClick(2)}
            className="item"
          >
            <div
              style={{
                background: `${
                  active === 2 ? "black" : "rgba(29, 27, 32, 0.12)"
                }`,
                color: `${active === 2 ? "white" : "black"}`,
                opacity: "0.8",
              }}
              className="num"
            >
              2
            </div>{" "}
            {link2}
          </li>
          <li
            style={{
              background: `${
                active === 3 ? "#7E22CE" : "rgba(29, 27, 32, 0.12)"
              }`,
              color: `${active === 3 ? "white" : "black"}`,
            }}
            onClick={() => handleClick(3)}
            className="item"
          >
            <div
              style={{
                background: `${
                  active === 3 ? "black" : "rgba(29, 27, 32, 0.12)"
                }`,
                color: `${active === 3 ? "white" : "black"}`,
                opacity: "0.8",
              }}
              className="num"
            >
              3
            </div>{" "}
            {link3}
          </li>
          <li
            style={{
              background: `${active === 4 ? "#7E22CE" : "none"}`,
              color: `${active === 4 ? "white" : "black"}`,
            }}
            onClick={() => handleClick(4)}
            className="item"
          >
            <div
              style={{
                background: `${
                  active === 4 ? "black" : "rgba(29, 27, 32, 0.12)"
                }`,
                color: `${active === 4 ? "white" : "black"}`,
                opacity: "0.8",
              }}
              className="num"
            >
              4
            </div>{" "}
            {link4}
          </li>
        </ul>
      </div>

      <div
        style={{
          background: `${active === 5 ? "#7E22CE" : "none"}`,
          color: `${active === 5 ? "white" : "black"}`,
        }}
        onClick={() => handleClick(5)}
        className="item sidenav-bot"
      >
        {
          active === 5 ? (<img src="./altset.png"/>):(        <img

            alt="setting"
            src="./setting-icon.png"
          />)
        }

        
        <p>{link5}</p>
      </div>
    </div>
  );
}

export default SideNav;
