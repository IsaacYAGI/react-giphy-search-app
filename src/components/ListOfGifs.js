import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Gif from './Gif';
import { GetGifs } from '../services/getGifs';


export default function ListOfGifs(){
    const { keyword } = useParams();
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        GetGifs({keyword: keyword}).then(gifs => {
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