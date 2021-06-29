import { React } from 'react';
import { Link } from "wouter";
import './Gif.css'

export default function Gif({title, id, url}){

    const handlerClickDetailGif = () =>{

    }
    return <Link href={`/gifdetail/${id}`} className="Gif">
              <h4>{title}</h4>
              <p>Id:<small>{id}</small></p>
              <img src={url} alt={title}/>
            </Link>
}