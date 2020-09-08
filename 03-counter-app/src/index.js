import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

//const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo="Hola mundo" valor={12345}  /> , divRoot);
ReactDOM.render(<CounterApp value={10}/>,divRoot);


/*Usamos REACTDOM para renderizar ya que este nos permite
crear nuestro arbol de componentes y comunicarnos entre ellos
de una manera más sencilla. En lugar de appendChild*/

