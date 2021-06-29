import { React } from 'react';

export default function GifDetail({title, id, url, directUrl, rating}){
    
    return (
        <div>
            Detail gif
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>DirectUrl: <a href={directUrl} target="_blank" rel="noreferrer">{directUrl}</a></div>
            <div>Rating: {rating}</div>
            <img src={url} alt={title}/>
        </div>
    )
}