import logo from './logo.svg';
import './App.css';
import myface from './Me.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myface} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://alexdoesvoices.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Alexdoesvoices.xyz 
        </a>
        <p>This is the future react website for Alexdoesvoices. </p>
      </header>
    </div>
  );
}

export default App;
