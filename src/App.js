import './App.css';
import React, { useState } from 'react';
import  ListOfGifs from './components/ListOfGifs';
import ApikeyManager from './components/ApikeyManager';
import { Link, Route } from "wouter";
import { useHistory } from "react-router-dom";

function App() {
  const [keyword, setKeyword] = useState('Panda');
  const history = useHistory();
  //console.log(history)

  const handlerSearchClick = () => history.push(`/gif/${keyword}`)
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <label>Search keyword</label>
        <input value={keyword} onChange={(event)=> setKeyword(event.target.value)}></input>
        <button onClick={handlerSearchClick}>Search</button>
        <ApikeyManager/>
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
