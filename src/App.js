import React from 'react';
import './App.css';

import questions from '../src/data/questions';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Data dans la console: </h1>
        {console.log(questions)}
      </div>
    </div>
  );
}

export default App;
