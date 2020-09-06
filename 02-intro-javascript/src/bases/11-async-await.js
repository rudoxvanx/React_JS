/*const getImagenPromesa = () => {
    return new Promise((resolve,reject) => resolve('http://ajsjjsjsañel.com'));
}

getImagenPromesa()
.then(console.log);
*/


/* Cuando antepongo el async en la función esto me 
   retornara el valor a modo de promesa.
*/
const getImage = async () => {
    //return 'https://ckhadskhksksks';
    try{
        const apiKey = 'eQEw5fsdvV37XYA3Wbd512lb2JQ66KzS';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
        const $img=document.createElement('img');
    
        $img.src=url;
        document.body.appendChild($img);
    }catch(error){
        console.log(error);
    }

}

getImage();


/*



/*
peticion.then(resp => {
    //console.log(resp);
    resp.json().then(data => {
        console.log(data);
    })
})

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src= url;
        document.body.append(img);
    })
    .catch(console.warn);

*/