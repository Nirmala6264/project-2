import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css'
import AddNote from './Components/AddNote';
import PageContent from './Components/PageContent';
const App = () => {
  
  
  return (
    <div> 
     
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AddNote' element={<AddNote />} />
        <Route path='/PageContent' element={<PageContent/> } />
      </Routes> 
      
    </div>
  );
};

export default App; 