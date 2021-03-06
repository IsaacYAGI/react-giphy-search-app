import { React, useState, useEffect, useContext } from 'react';
import { ApikeyContext } from '../contexts/ApikeyManagerContext';

import { useParams } from 'react-router-dom'
import GifDetail from '../components/GifDetail';
import { GetGifById } from '../services/getGifDetail';


export default function GifDetailPage(){
    const { id } = useParams();
    const [gif, setGif] = useState({});
    console.log("GifDetailPage:", id)
    const [loading, setLoading] = useState(false);
    const { Apikey } = useContext(ApikeyContext)

    useEffect(()=>{
        setLoading(true);
        
        GetGifById(id, Apikey).then(gif => {
            setLoading(false);
            setGif(gif)
            console.log(gif)
        });
        
    }, [id])
    

    if (loading) return <span>Cargando...</span>


    return (
        gif ? (<div>
            <h1>Gif Detail</h1>
            <GifDetail
                title={gif.title}
                id={gif.id}
                url={gif.url}
                directUrl={gif.directUrl}
                rating={gif.rating}
            />
        </div>): (<div>No data to display</div> )
    )
}