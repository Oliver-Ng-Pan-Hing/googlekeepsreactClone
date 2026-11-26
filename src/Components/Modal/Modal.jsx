import React, { useState } from "react";
import Form from "../Form/Form.jsx";
import "./Modal.css";

const Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal, editNote, darkMode } = props;

  const [hasCursor, setHasCursor] = useState(false);

  const handleCloseModal = () => !hasCursor && toggleModal();
  const handleMouseOverModal = () => setHasCursor(true);
  const handleMouseOutModal = () => setHasCursor(false);

  return (
    <div
      className={
        isModalOpen
          ? darkMode
            ? "modal open-modal modal-dark-mode"
            : "modal open-modal"
          : "modal"
      }
      onClick={handleCloseModal}
    >
      {/* <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModal}> */}
      <div
        className="modal-content"
        onMouseOver={handleMouseOverModal}
        onMouseOut={handleMouseOutModal}
      >
        <Form
          darkMode={darkMode}
          editNote={editNote}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          edit
        />
      </div>
    </div>
  );
};

export default Modal;
