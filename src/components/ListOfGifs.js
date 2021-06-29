import { React, useState, useEffect } from 'react';

import Gif from './Gif';
import getGifs from '../services/getGifs';


export default function ListOfGifs({keyword}){
     
    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
        getGifs({keyword: keyword}).then(gifs => setGifs(gifs));
        
    }, [keyword])
    return gifs.map(({id, title, url}) => <Gif 
            key={id}
            title={title} 
            id={id} 
            url={url}/>
        )   
      
}