import { createId } from "@paralleldrive/cuid2";
import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {

  const { edit, selectedNote, toggleModal, editNote, darkMode} = props
  // console.log(props)
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value)
    setIsActiveForm(true)
  };

  const submitForm = (event) => {
    event.preventDefault();

    if(!edit){    
      props.addNote({ 
        id: createId(),
        title,
        text,
      }) 
      
      setIsActiveForm(false);
    
    }else{
      editNote({
        id: selectedNote.id,
        title,
        text
      })
      toggleModal()
    }

    setText("");
    setTitle("");
    
  };

  const clickHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <>
      <div className={darkMode ? "form-container active-form form-dark-mode" : "form-container active-form"} onClick={clickHandler}>
        <form onSubmit={submitForm} className={isActiveForm ? "form" : ""} id="form" >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              id="note-title"
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            id="note-text"
            type="text"
            className="note-text"
            placeholder="Take a note..."
          />

          {isActiveForm ? (
            <div className={darkMode ? "form-actions form-actions-dark-mode" : "form-actions"}>
              <div className="icons">
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
