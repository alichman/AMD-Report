import React, {useState} from 'react';
import './App.css';
import {SectionButton} from "./components/SectionButton";
import {cats} from "./Types";
import {Floater} from "./components/Floater";

function App() {
    const [curCat, setCat] = useState<cats|null>(null);

    return (
    <div className="App">
      <header className="App-header">
          <h1>AMD Report</h1>
          <Floater cat={curCat}/>
      </header>
        <div className="ButtonFooter">
            <SectionButton cat={cats.about} setCat={setCat} curCat={curCat}/>
            <SectionButton cat={cats.role}  setCat={setCat} curCat={curCat}/>
            <SectionButton cat={cats.goals}  setCat={setCat} curCat={curCat}/>
            <SectionButton cat={cats.second}  setCat={setCat} curCat={curCat}/>
        </div>
    </div>
    );
}

export default App;
