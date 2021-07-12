import React, { useState } from "react";

const SidebarSubMenu = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {data && (
        <>
          <div className="subMenu">
            <p onClick={() => setIsActive(!isActive)}>{data.name}</p>
          </div>
          {isActive ? (
            <div className="subData">
              {data.options.map((option, idx) => (
                <p key={idx} onClick={() => setIsActive(!isActive)}>
                  {option}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default SidebarSubMenu;
