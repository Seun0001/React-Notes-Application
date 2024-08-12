import React, { useState } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import FolderList from "./components/FolderList";
import "./styles.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [folders] = useState(["General", "Work", "Personal"]);
  const [selectedFolder, setSelectedFolder] = useState("General");

  const addNote = (newNote) => {
    setNotes([
      ...notes,
      { ...newNote, id: Date.now(), folder: selectedFolder },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.includes(searchTerm) || note.content.includes(searchTerm)) &&
      note.folder === selectedFolder
  );

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} notes={notes} />
      <FolderList
        folders={folders}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <NoteEditor onSave={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
