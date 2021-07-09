import { React } from 'react';
import { Link } from "react-router-dom";
import './Gif.css'

export default function Gif({title, id, url}){

    return <Link to={`/gifdetail/${id}`} className="Gif">
              <h4>{title}</h4>
              <p>Id:<small>{id}</small></p>
              <img src={url} alt={title}/>
            </Link>
}