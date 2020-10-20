import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

/*Ordenar la estructura de archivos segun la necesidad de la aplicación*/
const GifExpertApp = () => {
    //const categories = ["One Punch","Samurai X","Dragon Ball"]
  
    const [categories, setCategories] = 
            useState(["One Punch"]);
    
    /*const handleAdd = () => {
    const new_category = 'Pokemon'

    setCategories([...categories,new_category]);

    } */
    return (
        <div>
            <h2>GifExportApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
          
            <ul>
                {   //Expresion de JS que retorne un valor
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category = {category}
                        />
                    ))
                }
                
            </ul>
        </div>
    )
}

export default GifExpertApp;