import React from 'react';
import './App.css';
import {SectionButton} from "./components/SectionButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>AMD Report</h1>
      </header>
        <div className="ButtonFooter">
            <SectionButton title="About AMD"/>
            <SectionButton title="My Role"/>
            <SectionButton title="Goals"/>
            <SectionButton title="Second Term"/>
        </div>
    </div>
  );
}

export default App;
