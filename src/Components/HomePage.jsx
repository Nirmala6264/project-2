import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import AddNote from './AddNote';
import PageContent from './PageContent';

const HomePage = () => {

    return (
        <div className='container'>
            <div id='main'><AddNote/></div>
            <div id='sidebar'>Notes App
              <ul><li className='li'><DescriptionIcon/>Notes</li></ul>
                </div>
            <div id='content'><PageContent/></div>
        </div>
    
    );
};

export default HomePage;