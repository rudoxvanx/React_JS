import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


//irm + tab --> Nos importa de una manera más rápida

/*Existen componentes del tipo clase y del tipo
funcion.

A los del tipo funcion se les llama funtional components
estos ya admiten estados*/

const PrimeraApp = () => {
    return ( 
            <>
              <h1>Hola mundo</h1> 
              <p>Este es mi parrafo</p>
            </>
            
            /*<Fragment>
                <h1>Hola mundo</h1> 
                <p>Este es mi parrafo</p>
            </Fragment>*/
        );
}

export default PrimeraApp;