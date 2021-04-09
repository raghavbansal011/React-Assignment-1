import React, { useState } from 'react';
import './App.css';
import Skills from './components/Skills/skills';
import Percentage from './components/Percentage/percentage';

const skillRatings = { JavaScript: 0, HTML: 0, CSS: 0, React: 0 };
function App() {
  const [skillsState , updateSkillsState] = useState(skillRatings);

  return (
    <div className="App">
      <Skills updateSkillsState={updateSkillsState} skillsState={skillsState}/>
      <Percentage skillsState={skillsState}/>
    </div>
  );
}

export default App;
