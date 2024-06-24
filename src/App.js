import './App.css';
import React from 'react';
import Squareball from './Squareball';
import { useState } from 'react';
import Controls from './Controls';

function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    rotate: 0
  })

  return (
    <section className='section u-d-flex u-flex-vertical u-align-center u-justify-center'>
      <Squareball 
        position = {position}/>
      <Controls 
        setPosition = {setPosition} />
    </section>
    
  );
}

export default App;
