import { React, useState, useEffect } from 'react';

import Gif from './Gif';
import getGifs from '../services/getGifs';


export default function ListOfGifs({params}){
     const {keyword} = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getGifs({keyword: keyword}).then(gifs => {
            setLoading(false);
            setGifs(gifs)
        });
        
    }, [keyword])


    if (loading) return <span>Cargando...</span>

    return <div>
        {

            gifs.map(({id, title, url}) => <Gif 
                key={id}
                title={title} 
                id={id} 
                url={url}/>
            )   
        }
    </div>
      
}