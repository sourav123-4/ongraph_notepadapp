import './App.css';
import React from 'react'
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid'

export default function App() {
  const [notes,setNotes]=React.useState([]) 
  
  const addNote=(text)=>{
    const date=new Date()
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote]
    setNotes(newNotes)
  }
  
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id !== id)
    setNotes(newNotes)
  }

  const updateNote=(id,text)=>{
    // const newNote={
    //   text:text
    // }
    // const newNotes=[...notes,newNote]
    // setNotes(newNotes)
    const updateNotes=notes.filter((note)=>note.text+'hello')
    setNotes(updateNotes)    
  }
  return (
    <div className="container">
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      handleUpdateNote={updateNote}
      />
    </div>
  );
}