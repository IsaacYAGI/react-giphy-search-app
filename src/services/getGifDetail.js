const apikey = localStorage.getItem("giphy_apikey") || "";

export async function GetGifById(id = ""){
    const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}`;
    try {
        if (apikey !== ""){

            const response = await (await fetch(apiURL)).json();
            const {data} = response || {data: []};
            console.log("DATA:",data)
          if (data === undefined || data.title === undefined) return null
            
                const {images, title, id, rating, embed_url: directUrl} = data;
                const {url} = images.downsized_medium;
        
                return {
                    id,
                    title,
                    url,
                    directUrl,
                    rating
                }
            
        }
        return null;
        
    } catch (error) {
        console.log("ERROR:",error)
    }
}