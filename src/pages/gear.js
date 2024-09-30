import React from 'react';
import './Styling/equipment.css'; // Make sure the path is correct

const AppWrapper = ({ children }) => {
    return (
        <div className="app-wrapper_equipment">
    <h1>How can I help</h1>
            {children}
        </div>
    );
};

export default AppWrapper;
