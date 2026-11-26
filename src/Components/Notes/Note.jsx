import React, { useState } from "react";
import "./Note.css"

const Note = (props) => {
  const { toggleModal, note, deleteNote, setSelectedNote, darkMode } = props
  // const [tick, setTick] = useState(false)
  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = () => {
    toggleModal()
    setSelectedNote(note)
  }
  const mouseOverHandler = () => {
    setIsHover(true);
  };
  const mouseOutHandler = () => {
    setIsHover(false);
  };

  const deleteHandler = () => {
    deleteNote(note.id)
  }
 
  return (
    <>
      <div
        className={darkMode ? "note note-dark-mode" : "note"}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        id={note.id}
        onClick={noteClickHandler}
      >
        {isHover && (
          <span className="material-symbols-outlined check-circle">
            check_circle
          </span>
        )}
        <div className="title">{note.title}</div>
        <div className="text">{note.text}</div>
        <div
          className="note-footer"
          style={{ visibility: isHover ? "visible" : "hidden" }}
        >
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              add_alert
            </span>
            <span className="tooltip-text">Remind me</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              person_add
            </span>
            <span className="tooltip-text">Collaborator</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              palette
            </span>
            <span className="tooltip-text">Change Color</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              image
            </span>
            <span className="tooltip-text">Add Image</span>
          </div>
          <div className="tooltip archive" onClick={deleteHandler}>
            <span className="material-symbols-outlined hover small-icon">
              archive
            </span> 
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover small-icon">
              more_vert
            </span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
