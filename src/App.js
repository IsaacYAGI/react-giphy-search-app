import './App.css';
import React, { useState } from 'react';
import  ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";
function App() {
  const [keyword, setKeyword] = useState('Panda');
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/perro">Gifs de perros</Link>
        <Link to="/gif/gato">Gifs de gatos</Link>

        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
       
      </section>
    </div>
  );
}

export default App;
