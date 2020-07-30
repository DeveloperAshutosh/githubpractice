  
import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice Git Branching and Merging!
        Its nice way to learn Git the way we are doing here in the claas .
        I am lucky that i got a realy inteligent partner to work with . got lucky .
      </p>
      
      <About />
      <Services />
    </div>
  );
}

export default App;