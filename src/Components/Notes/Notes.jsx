import "./Notes.css";
import Note from "./Note.jsx";

const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote, darkMode } = props;

  return (
    <div className={darkMode ? "notes notes-dark-mode" : "notes"}>
      {notes.length === 0 ? (
        <p>Notes will appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
           
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
            darkMode={darkMode}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
