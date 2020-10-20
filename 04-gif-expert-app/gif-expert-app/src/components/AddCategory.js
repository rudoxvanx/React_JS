import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    //console.log(props.setCategories);

    //const { setCategories } = props.setCategories;

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log('Submit hecho');
        if(inputValue.trim().length > 2){
           //A este componente no se le paso el el arreglo de categorias
           //pero se puede acceder a el por medio de una callback
           setCategories(cats => [inputValue,...cats]);
           setInputValue('');
        }
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
          <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}/>     
          </form> 
          
        </>

        //<button onClick = {handleInputChange}>Agregar</button>
    )
}

AddCategory.prototype = {
    setCategories:PropTypes.func.isRequired
}