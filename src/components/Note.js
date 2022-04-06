import React from 'react'
export default function Note({id,text,date,handleDeleteNote,handleUpdateNote}){
    return(
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <button className='note-edit'
                onClick={handleUpdateNote}>Edit</button>
                <button className='note-delete' 
                onClick={()=>handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    )
}