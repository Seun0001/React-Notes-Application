import React from "react";

const Folder = ({ folder, isSelected, onSelect }) => {
  return (
    <div
      className={`folder-item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(folder)}
    >
      {folder}
    </div>
  );
};

export default Folder;
