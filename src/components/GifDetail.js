import { React, useState, useEffect } from 'react';

export default function GifDetail({title, id, url, directUrl, rating}){
    
    return (
        <div>
            Detail gif
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>DirectUrl: <a href={directUrl} target="_blank">{directUrl}</a></div>
            <div>Rating: {rating}</div>
            <img src={url}/>
        </div>
    )
}