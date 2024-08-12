import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default Note;
