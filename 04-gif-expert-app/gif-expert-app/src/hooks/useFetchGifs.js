import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs"


/*Extraccion de una pequeña logica 
  que se va implementar para realizar una
  pequeña lógica 
*/
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGifts(category)
            .then(imgs => {
                setTimeout(() => {
                    console.log(imgs);
                    setState({
                        data:imgs,
                        loading:false
                    });
                },3000);
            })
    },[category])
    
    /*setTimeout(()=>{
        setState({
            data:[1,2,3,4,5,6,7],
            loading:false
        })
  
    },3000);*/

    return state;
}


//La importacion de react es para retornar codigo en JSX