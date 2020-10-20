
//Esta funcion no regresa los gifs regresara una promesa que regresa los
//gifs

export const getGifts = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bw9yA2U4QGXcdYIXEUkpgJu9OIRJMr4z&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);



    const  { data }  = await resp.json();
    /*console.log(data);
    const  [a] = data;
    const {images} = a;
    console.log(images);*/

    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;
    /*console.log(gifs);
    setImages(gifs);*/
}
