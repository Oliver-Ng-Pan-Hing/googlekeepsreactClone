import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Form from "./Components/Form/Form.jsx";
import Notes from "./Components/Notes/Notes.jsx";
import Modal from "./Components/Modal/Modal.jsx";

const NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
 
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNotes) => prevNotes.id !== id);
    });
  };

  const editNote = (editedNote) => {
    setNotes(prevNotes => {
      const newArray = prevNotes.map((note) => {
      if(editedNote.id === note.id){
        
         note.title = editedNote.title
         note.text = editedNote.text
      }
      return note      
    })
      return newArray
    })
    
  }

  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {
        isModalOpen && <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>
      }
      
    </>
  );
};

export default App;
