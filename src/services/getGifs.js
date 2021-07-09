export async function GetGifs({keyword = "morty"} = {}, Apikey){
    
    // const { Apikey } = useContext(ApikeyContext)
    //Para usar el apikey desde el .env usar esto
    // const Apikey = process.env.REACT_APP_APIKEY;

    console.log(Apikey);

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${Apikey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
    try {
        if (Apikey !== ""){

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