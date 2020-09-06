import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


//irm + tab --> Nos importa de una manera más rápida

/*Existen componentes del tipo clase y del tipo
funcion.

A los del tipo funcion se les llama funtional components
estos ya admiten estados*/

const PrimeraApp = () => {
    /*const saludo = {
        nombre:'Rudolf',
        edad:27
    };*/

    const saludo = 'Hola mundo';

    /*Dentro de las llaves se imprime codigo JS que retorne un valor
    no cualquier valor*/
    return ( 
            <>
              {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}
              <h1>{saludo}</h1>
              <p>Este es mi parrafo</p>
            </>
            
            /*<Fragment>
                <h1>Hola mundo</h1> 
                <p>Este es mi parrafo</p>
            </Fragment>*/
        );
}

export default PrimeraApp;