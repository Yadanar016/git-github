import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        
        <div className="card">
          <p><strong>Developed by:</strong> Yadanar and Jolyn</p>
          <p><strong>Environment:</strong> Docker Development Setup</p>
          
          <button className="custom-btn" onClick={() => setLikes(likes + 1)}>
             Click to Test Interactivity: {likes}
          </button>
        </div>

        
      </header>
    </div>
  );
}

export default App;