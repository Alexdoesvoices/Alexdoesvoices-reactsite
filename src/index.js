import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './pages/Styling/mainstyle.css'; // Make sure the path is correct







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <div className="app-wrapper">
            <h1 className='center_text'>  <br></br> This is Landing pages</h1>
            <p className='center_text'>I hope yall enjoy your time</p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
