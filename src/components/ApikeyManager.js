import { React, useState, useEffect } from 'react';

export default function ApikeyManager(){
    const [apikey, setApikey] = useState(localStorage.getItem("giphy_apikey") || "")
    
    useEffect(()=>{
        // setLoading(true);
        // getGifs({keyword: keyword}).then(gifs => {
        //     setLoading(false);
        //     setGifs(gifs)
        // });
        
    }, [apikey])
    return (
        <>
        <input placeholder="Insert Apikey..." value={apikey} onChange={(event) => setApikey(event.target.value)}></input>
        <button onClick={()=> localStorage.setItem("giphy_apikey", apikey)}>{apikey != "" ? "Change" : "Add"} Apikey</button>
        </>
    )
}