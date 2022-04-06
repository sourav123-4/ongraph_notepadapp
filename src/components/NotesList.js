import React from 'react'
import Note from './Note'
import AddNote from './AddNote';
export default function NotesList({notes,handleAddNote,handleDeleteNote,handleUpdateNote}){
    return(
        <div className='notes-list'>
            {notes.map((note)=><Note 
            id={note.id} 
            text={note.text} 
            date={note.date} 
            handleDeleteNote={handleDeleteNote}
            handleUpdateNote={handleUpdateNote}
            />)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}