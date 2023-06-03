import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MarkdownBody from "../components/MarkdownBody";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { useEffect } from "react";

const UserDashboard = () => {
  // if else - if localStorage has data, return it. To prevent crash, return [] if no data (1st time load)
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.notesStorage) || []
  );
  const [selectedNote, setSelectedNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notesStorage", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "untitled note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    // check if id is the one being deleted

    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === selectedNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  // returns object of current active note - helper for markdown section
  const getActiveNote = () => {
    return notes.find((note) => note.id === selectedNote);
  };

  return (
    <>
      {/* <Navbar className=''/> */}
      <div className="flex flex-col min-h-[100vh] bg-[#211c1c]">
        <div className="dash-main-body flex flex-row">
          <Sidebar
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
          <MarkdownBody
            selectedNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
          />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
