import React from 'react';
import './App.css';

import AutoCompleteText from './components/AutoCompeteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompleteText items={countries} />
      </div>
    </div>
  );
}

export default App;
