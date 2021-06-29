import './App.css';
import React, { useState } from 'react';
import  ListOfGifs from './components/ListOfGifs';
import ApikeyManager from './components/ApikeyManager';
import { Link, Route } from "wouter";
import { useHistory } from "react-router-dom";
import GifDetailPage from './pages/GifDetailPage';

function App() {
  const [keyword, setKeyword] = useState('Panda');
  const history = useHistory();
  //console.log(history)

  const handlerSearchClick = () => history.push(`/gifsearch/${keyword}`)
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <label>Search keyword</label>
        <input value={keyword} onChange={(event)=> setKeyword(event.target.value)}></input>
        <button onClick={handlerSearchClick}>Search</button>
        <ApikeyManager/>
        <Link to="/gifsearch/panda">Gifs de pandas</Link>
        <Link to="/gifsearch/perro">Gifs de perros</Link>
        <Link to="/gifsearch/gato">Gifs de gatos</Link>

        <Route
          component={ListOfGifs}
          path="/gifsearch/:keyword"
        />
        <Route
          component={GifDetailPage}
          path="/gifdetail/:id"
        />
       
      </section>
    </div>
  );
}

export default App;
