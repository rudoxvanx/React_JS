//import React, { useState,useEffect } from 'react'
import React from 'react'
import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    const {data:images,loading} = useFetchGifs(category);


    //console.log(loading);
    /*const [images, setImages] = useState([])
    
    useEffect(() => {
        //getGifts();
        getGifts(category)
        .then(setImages);
        //.then(imgs => setImages(imgs));
    },[category])*/
   

   
    //getGifts();

    /*Custom Hooks es reutilizar logica de tal manera que sea sencillo
    utilizarla nuevamente*/
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {
                        images.map(img => ( 
                            <GifGridItem 
                                key={img.id}
                                {...img}/>
                        ))
                    }
            </div>
          
            {/**/}
            {/*loading?'Cargando....':'Data cargando'*/}
        </>
        /*images.map(({id,title}) => {
                        return <li key = {id}>{title}</li>
                        <GifGridItem  />
        })*/
    );
}
