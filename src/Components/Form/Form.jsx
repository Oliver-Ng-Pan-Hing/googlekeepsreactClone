import { createId } from "@paralleldrive/cuid2";
import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {

  const { edit, selectedNote, toggleModal, editNote} = props
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
      <div className="form-container active-form" onClick={clickHandler}>
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
            <div className="form-actions">
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

{
  /* <div className="form-container inactive-form" onClick={clickHandler}>
          <form>
            <input
              type="text"
              className="note-text"
              placeholder="Take a note..."
            />
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
          </form>
        </div> */
}

// const [userInput, setUserInput] = useState({
//   title: "",
//   text: ""
// })

// title input
// const titleChangeHandler = (event) => setUserInput((prevState) => {
//   return {
//     ...prevState,
//     title: event.target.value
//   }
// })

// const submitForm = (event) => {
//   event.preventDefault()
//     setUserInput({

//         title: "",
//         text: ""
// })
// }

// // text input
//     const textChangeHandler = (event) => setUserInput((prevState) => {
//       return {
//         ...prevState,
//         text: event.target.value
//       }
//     })
