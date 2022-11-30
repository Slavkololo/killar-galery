import React from 'react';
import { useState } from 'react';
import './App.css';
import Photos from './components/Photos';
import Header from './components/UI/header/Header';

console.log(React.version)

function App() {

  // const [filter, setFilter] = useState('');

  return (
    <div className="App">
     <Header title='Killar galery'/>
     <Photos />
    </div>
  );
}

export default App;
