import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
    <div>
        <h1>My contacts</h1>
        </div>
      <div>
      <Contacts />
      </div>
    </div>
  );
}

export default App;
