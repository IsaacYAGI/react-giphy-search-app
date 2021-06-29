import './App.css';
import React, { useState } from 'react';
import  ListOfGifs from './components/ListOfGifs';
function App() {
  const [keyword, setKeyword] = useState('Panda');
  return (
    <div className="App">
      <section className="App-content">
        
        <button onClick={()=>setKeyword("Venezuela")}>Change</button>
        <ListOfGifs keyword={keyword}/>
       
      </section>
    </div>
  );
}

export default App;
