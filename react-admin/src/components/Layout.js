import React, { useState } from "react";
import userLogo from "../images/userLogo.png";
import "../styles/Layout.css";
import { sidebarData } from "./data";
import SidebarSubMenu from "./SidebarSubMenu";

export default function Layout({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="navWrap">
        <nav>
          <h1>App Name</h1>
          <div>
            <img className="logo" src={userLogo} alt="" />
            <p>Moheb Dabilkar</p>
          </div>
          <div
            className={`burger-btn ${isActive ? "active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          />
        </nav>
      </header>
      <div className={`sidebar ${isActive ? "active" : ""}`}>
        <div>
          <img className="logo" src={userLogo} alt="" />
          <p>Moheb Dabilkar</p>
        </div>
        <div className="components">
          {sidebarData.map((data) => (
            <SidebarSubMenu data={data} />
          ))}
        </div>
        <div>
          <button className="btn">LogOut</button>
        </div>
      </div>
      {children}
    </>
  );
}
