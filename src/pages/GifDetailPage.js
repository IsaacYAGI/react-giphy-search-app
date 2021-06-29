import { React, useState, useEffect } from 'react';
import GifDetail from '../components/GifDetail';

export default function GifDetailPage({params}){
    const {id} = params;
    console.log("GifDetailPage:", id)
    return (
        <div>
            <h1>Gif Detail</h1>
            <GifDetail></GifDetail>
        </div>
    )
}