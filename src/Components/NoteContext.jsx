// NoteContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the notes
const initialState = [];

// Create the context
const NoteContext = createContext();

// Reducer function to handle state changes
const noteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
};

// NoteContext Provider component
export const NoteProvider = ({ children

}) => {
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

// Custom hook to access the context
export const useNoteContext = () => {
  return useContext(NoteContext);
};
