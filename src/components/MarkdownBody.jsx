import React from "react";
import ReactMarkDown from "react-markdown";

const MarkdownBody = ({ selectedNote, onUpdateNote }) => {
  // having no note selected was causing rendering trouble
  if (!selectedNote) {
    return (
      <div className="inactive font-semibold text-5xl cursor-default">no note selected.</div>
    ); // render a loading state or default content
  }

  const currentFieldEdit = (key, value) => {
    onUpdateNote({
      // spread notes out so it only modifies what is being touched, everything else stays untouched
      ...selectedNote,
      // key targets both title or body, whichever is being updated at the moment
      [key]: value,
      lastModified: Date.now(),
    });
  };

  return (
    <div className="markdown-body w-[70%] h-screen p-5">
      <div className="note-input-area flex flex-col h-[50vh]">
        <input
          type="text"
          id="title"
          value={selectedNote.title}
          onChange={(e) => currentFieldEdit("title", e.target.value)}
          autoFocus
          className="h-10 mb-3 bg-[#403838] outline-none"
        />
        <textarea
          id="body"
          value={selectedNote.body}
          onChange={(e) => currentFieldEdit("body", e.target.value)}
          className="h-[100%] bg-[#403838] outline-none"
        ></textarea>
      </div>

      <div className="note-preview-area h-[50%] m-0 flex flex-col">
        <h1 className="flex justify-center text-3xl font-bold basic-tc p-5">
          {selectedNote.title}
        </h1>
        <ReactMarkDown className="basic-tc">{selectedNote.body}</ReactMarkDown>
      </div>
    </div>
  );
};

export default MarkdownBody;
