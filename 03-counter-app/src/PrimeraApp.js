import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


//irm + tab --> Nos importa de una manera más rápida

/*Existen componentes del tipo clase y del tipo
funcion.

A los del tipo funcion se les llama funtional components
estos ya admiten estados*/

const PrimeraApp = ({saludo,subtitulo/*valor,subtitulo = "soy un subtitulo"*/}) => {
   // console.log(valor)
    /*if(!saludo){
        throw new Error('El saludo no es necesario');
    }*/

    /*const saludo = {
        nombre:'Rudolf',
        edad:27
    };*/

    //const saludo = 'Hola mundo';
    //console.log(props);
    /*Dentro de las llaves se imprime codigo JS que retorne un valor
    no cualquier valor*/
    return ( 
            <>
              {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}
              <h1>{saludo}!!!!???</h1>

              <p>{subtitulo}</p>
            </>
            
            /*<Fragment>
                <h1>Hola mundo</h1> 
                <p>Este es mi parrafo</p>
            </Fragment>*/
        );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired,
    //valor:PropTypes.number.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}
export default PrimeraApp;