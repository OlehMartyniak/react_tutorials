import React, { useState } from 'react';

import Content from './MySolution/Content';
import './App.css';
import Square from './TutorialSolution/Square';
import Input from './TutorialSolution/Input';

const App = () => {

  const [colorValue,setColorValue] = useState('');
  const [hexValue,setHexValue] = useState('');
  const [isDarkText,setIsDarkText] = useState(true);

  return (
    <div className='App'>
      <div>
        <Content/>
      </div>
      <div className='contentTwo'>
        <h1>Tutorial Solution</h1>
        <Square
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <Input
          colorValue={colorValue}
          setColorValue={setColorValue}
          hexValue={hexValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </div>
    </div>
  )
}

export default App;