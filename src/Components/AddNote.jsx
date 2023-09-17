import React, { createContext, useState } from 'react';
import PageContent from './PageContent';

 export const mycontext = createContext()
const AddNote = () => {
  const [text, setText] = useState('');
  

  const handleAddNote = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_NOTE', payload: { id: Date.now(), text } });
      setText('');
    }
  };


    
    
    // const jsonfile = {
        // "notes": [
        //     {
        //         "id": 1,
        //         "title": "Meeting Agenda",
        //         "content": "Discuss project status and goals for the next sprint.",
        //         "timestamp": "2023-09-15T10:00:00Z"
        //     },
        //     {
        //         "id": 2,
        //         "title": "Grocery List",
        //         "content": "Milk, eggs, bread, apples, and pasta.",
        //         "timestamp": "2023-09-15T15:30:00Z"
        //     },
        //     {
        //         "id": 3,
        //         "title": "Book Recommendations",
        //         "content": "1. 'The Great Gatsby' by F. Scott Fitzgerald\n2. 'To Kill a Mockingbird",
        //         "timestamp": "2023-09-15T20:30:00Z"
        //     }]


      return (
        <div>
            <p className='add'>Add a Note</p>
            <p className='title'>Title</p>
              <input className='input' type='text' placeholder='|Take a note...' onChange={(e) => { setText(e.target.value) }} />
          <button onClick={handleAddNote}>Add</button>
          
                    </div>
    );
};

export default AddNote;