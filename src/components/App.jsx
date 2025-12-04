import React from "react";
import emojipedia from "../emojipedia";  // Adjust path as needed
import Entry from "../../Entry";

function showEmoji(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1><span>emojipedia</span></h1>
      {emojipedia.map(showEmoji)}
    </div>
  );
}

export default App;
