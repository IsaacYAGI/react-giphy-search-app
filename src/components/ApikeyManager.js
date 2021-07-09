import { React, useState, useEffect, useContext } from 'react';
import { ApikeyContext } from '../contexts/ApikeyManagerContext';

export default function ApikeyManager(){
    const { Apikey, setApikey } = useContext(ApikeyContext)
    // const [apikey, setApikey] = useState(localStorage.getItem("giphy_apikey") || "")
    
    useEffect(()=>{
        // setLoading(true);
        // getGifs({keyword: keyword}).then(gifs => {
        //     setLoading(false);
        //     setGifs(gifs)
        // });
        
    }, [])
    return (
        <>
        <input placeholder="Insert Apikey..." value={Apikey} onChange={(event) => setApikey(event.target.value)}></input>
        {/* <button onClick={()=> localStorage.setItem("giphy_apikey", apikey)}>{apikey !== "" ? "Change" : "Add"} Apikey</button> */}
        </>
    )
}