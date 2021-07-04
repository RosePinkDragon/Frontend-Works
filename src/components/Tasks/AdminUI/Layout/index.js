import React, { useState } from "react";
import userLogo from "images/userLogo.png";
import "styles/Layout.css";
import { sidebarData } from "./data";
import SidebarSubMenu from "./SidebarSubMenu";

export default function Layout({ children, logger }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header>
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
        <div className="sidebarUserInfo">
          <img className="logo" src={userLogo} alt="" />
          <p>Moheb Dabilkar</p>
        </div>
        <div className="components">
          {sidebarData.map((data, idx) => (
            <SidebarSubMenu key={idx} data={data} />
          ))}
        </div>
        <div>
          <button className="btn logOut" onClick={() => logger(false)}>
            LogOut
          </button>
        </div>
      </div>
      <div className="bodyWrap">{children}</div>
    </>
  );
}
