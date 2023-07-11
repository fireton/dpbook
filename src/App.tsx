import React from 'react';
import './App.css';
import BookPage from './BookPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookPage pageNumber={1}/>
      </header>
    </div>
  );
}

export default App;
