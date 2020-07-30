import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Git merging practice!</h1>

      <h2>Some commands you can in git branches:</h2>
      <ul>
        <li>git checkout -b your-branch-name</li>
        <li>git checkout your-branch-name</li>
        <li>git merge your-other-branch-name</li>
      </ul>
    </div>
  );
}

export default App;
