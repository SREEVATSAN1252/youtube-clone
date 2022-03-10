import React from "react";
import "./SidebarRow.css";

function SidebarRow({ tittle, Icon, selected }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__tittle">{tittle}</h2>
    </div>
  );
}

export default SidebarRow;
