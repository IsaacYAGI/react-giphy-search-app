import { React, useState, useEffect } from 'react';
import GifDetail from '../components/GifDetail';
import { GetGifById } from '../services/getGifDetail';


export default function GifDetailPage({params}){
    const {id} = params;
    const [gif, setGif] = useState({});
    console.log("GifDetailPage:", id)
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        
        GetGifById(id).then(gif => {
            setLoading(false);
            setGif(gif)
            console.log(gif)
        });
        
    }, [])
    

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