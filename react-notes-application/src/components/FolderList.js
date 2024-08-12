import React from "react";

const FolderList = ({ folders, selectedFolder, setSelectedFolder }) => {
  return (
    <div className="folder-list">
      {folders.map((folder) => (
        <div
          key={folder}
          className={`folder-item ${
            folder === selectedFolder ? "selected" : ""
          }`}
          onClick={() => setSelectedFolder(folder)}
        >
          {folder}
        </div>
      ))}
    </div>
  );
};

export default FolderList;
