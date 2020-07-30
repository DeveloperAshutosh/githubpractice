import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/services';

function App() {
  return (
    <div className="App">

      <h1>Git merging practice!</h1>

      <h2>Some commands you can in git branches:</h2>
    <p>Let's practice Git Branching and Merging!
        Its nice way to learn Git the way we are doing here in the claas .
        I am lucky that i got a realy inteligent partner to work with . got lucky .
      </p>
      <ul>
        <li>git checkout -b your-branch-name</li>
        <li>git checkout your-branch-name</li>
        <li>git merge your-other-branch-name</li>
      </ul>

      
      
      
      <About />
      <Services />

    </div>
  );
}

export default App;