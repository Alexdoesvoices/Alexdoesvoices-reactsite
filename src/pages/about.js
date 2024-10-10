import React from 'react';
import './Styling/mainstyle.css'; // Make sure the path is correct

const AppWrapper = ({ children }) => {
    return (
        <div className="app-wrapper">
            <h1 className='center_text'>  <br></br> The about Page</h1>
            {/* <img src={} alt='Logo' height= "400" className=""/> */}
            {children}
            
        </div>
    );
};

export default AppWrapper;
