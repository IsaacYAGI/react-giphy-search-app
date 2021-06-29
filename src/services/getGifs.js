const apikey = localStorage.getItem("giphy_apikey") || "";

export async function GetGifs({keyword = "morty"} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
    try {
        if (apikey !== ""){

            const response = await (await fetch(apiURL)).json();
            const {data} = response || {data: []};
            console.log("DATA:",data)
          if (data === undefined) return []
            const gifs = data?.map(image => {
                const {images, title, id} = image;
                const {url} = images.downsized_medium;
        
                return {
                    id,
                    title,
                    url
                }
            });
            console.log(gifs);
            return gifs;
        }
        return [];
        
    } catch (error) {
        console.log("ERROR:",error)
    }
}