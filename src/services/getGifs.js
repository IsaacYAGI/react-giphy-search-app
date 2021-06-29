const apikey = "YOUR_GIPHY_APIKEY_HERE";

export default async function getGifs({keyword = "morty"} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;
    const response = await (await fetch(apiURL)).json();
    const {data} = response;

    const gifs = data.map(image => {
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