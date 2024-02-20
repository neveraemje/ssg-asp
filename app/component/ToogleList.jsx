"use client"
import React, { useState } from "react";

const ToggleList = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`expand-container ${isExpanded ? "" : "expand-hidden"}`}>
      <div className="expand-control" onClick={toggleExpansion}>
        <span className="expand-control-icon icon">&nbsp;</span>
        <span className="expand-control-text">{title}</span>
      </div>
      <div className={`expand-content ${isExpanded ? "" : "expand-hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default ToggleList;
