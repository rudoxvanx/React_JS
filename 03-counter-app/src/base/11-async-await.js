

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'CI8c9AjX5BFgd2vOhX1Ovx5V2T6Thl15abcdefghi';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        /*const img = document.createElement('img');
        img.src = url;
        document.body.append( img );*/

        return url;

    } catch (error) {
        // manejo del error
        //console.error(error);
        return 'No existe';
    }
    
    
    
}

 getImagen();



