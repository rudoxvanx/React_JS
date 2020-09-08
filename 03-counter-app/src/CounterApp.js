import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    //const [ nombre,setNombre ] = useState('Goku');
    //console.log(nombre,setNombre);
    //const state = useState();
    //console.log(state);
    //console.log(state[1]());
  

    const [ counter,setCounter ] = useState(value); // []
    /*USO DE HOOKS
        Los hooks son funciones.

        useState es un hook que regresa un arreglo de 
    */


    /*SETCOUNTER cambia el estado del counter por consecuencia se
      dispara de nuevo la renderización del elemento. Solo se 
      renderiza el elemento cambiante
    */
    
    //handleAdd
    const handleAdd = () => {
        //No podemos poner counter++ ya que esto mutaria y no funcionaria
        setCounter(counter + 1);
        //setCounter((c) => c + 1);

    }

    const handleSubtract = () => {
        //No podemos poner counter++ ya que esto mutaria y no funcionaria
        setCounter(counter - 1);
        //setCounter((c) => c + 1);

    }

    const reset = () => {
        setCounter(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>

            {/*<button onClick={(e) => {handleAdd(e)}} >+1</button>*/}

        </>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number,
}

export default CounterApp;

// (rfcp + tab) -> Crear la estructura del componente funcional