import React from 'react'
export default function AddNote({handleAddNote,handleUpdateNote}){
    const [noteText,setNoteText]=React.useState('')
    const characterLimit=200
    const handlechange=(event)=>{
        if(characterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }
    const handlesaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }
    return(
        <div className='note new'>
            <textarea
            rows='8'
            cols='10' 
            placeholder='type to add new note'
            onChange={handlechange}>
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit-noteText.length} remaining</small>
                <button className='save' onClick={handlesaveClick}>Save</button>
            </div>
        </div>
    )
}