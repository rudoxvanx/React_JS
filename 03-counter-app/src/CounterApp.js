import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number,
}

export default CounterApp;

// (rfcp + tab) -> Crear la estructura del componente funcional