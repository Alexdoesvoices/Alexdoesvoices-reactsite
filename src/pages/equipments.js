import React from 'react';
import './Styling/about.css'; // Make sure the path is correct

const AppWrapper = ({ children }) => {
    return (
        <div className="app-wrapper">
            <h1 className='center_text'>How can I do this</h1>
            {children}
        </div>
    );
};

export default AppWrapper;
