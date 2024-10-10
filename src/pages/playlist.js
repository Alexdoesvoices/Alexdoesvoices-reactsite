import React from 'react';
import './Styling/mainstyle.css'; // Make sure the path is correct
// import logo from '../Me.png'; // Tell webpack this JS file uses this image

const AppWrapper = ({ children }) => {
    return (
        <div className="app-wrapper">
            <h1 className='center_text'>  <br></br> This is Landing pages</h1>
            {/* <img src={} alt='Logo' height= "400" className=""/> */}
            {children}
            
        </div>
    );
};

export default AppWrapper;
