import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MarkdownBody from "../components/MarkdownBody";
import uuid from "react-uuid";

const UserDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(false);

  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "untitled note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (idToDelete) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === selectedNote ? updatedNote : note))
    );
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === selectedNote);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[#211c1c]">
      <div className="dash-main-body flex flex-row">
        <Sidebar
          notes={notes}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
        />
        <MarkdownBody selectedNote={getActiveNote()} onUpdateNote={handleUpdateNote} />
      </div>
    </div>
  );
};

export default UserDashboard;
