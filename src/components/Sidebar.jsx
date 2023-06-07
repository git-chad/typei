import { motion, AnimatePresence } from "framer-motion";
import ModalLimitReached from "./ModalLimitReached";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  selectedNote,
  setSelectedNote,
}) => {
  const sortNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const noteCount = notes.length;

  const handleAddNote = () => {
    if (noteCount >= 5) {
      alert(
        "You have reached the note limit. Upgrade to a premium account to add more notes."
      );
      return;
    }

    onAddNote();
  };

  return (
    <div className="sidebar w-[30%] min-h-[100vh] m-0 border-r border-[#211c1c]">
      <div className="sidebar-header flex justify-between p-5">
        <h1 className="text-2xl font-bold basic-tc">
        Notes 📝 {noteCount}/5
        </h1>
        <button
          onClick={handleAddNote}
          className={`transition-all ease-in-out ${
            noteCount >= 5 ? "disabled" : ""
          }`}
          disabled={noteCount >= 5}
        >
          add
        </button>
      </div>

      {noteCount >= 5 && <ModalLimitReached />}

      <div className="sidebar-notes h-screen overflow-y-scroll">
        <AnimatePresence>
          {sortNotes.map((note) => (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              key={note.id}
              onClick={() => setSelectedNote(note.id)}
              className={`sidebar-note p-5 cursor-pointer transition-all ease-in-out
                ${
                  note.id === selectedNote &&
                  "active p-5 cursor-pointer transition-all ease-in-out"
                }`}
            >
              <div className="note-title flex justify-between">
                <strong className="text-xl basic-tc">{note.title}</strong>
                <button
                  onClick={() => onDeleteNote(note.id)}
                  className="transition-all ease-in-out"
                >
                  delete
                </button>
              </div>
              <p className="pt-2 pb-2">
                {note.body && note.body.substr(0, 30) + "..."}
              </p>
              <small className="note-meta block text-xs italic basic-tc">
                Last modified{" "}
                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;
