import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../../PrimeraApp';
//import '@testing-library/jest-dom';


describe('Pruebas en <PrimeraApp/>', () => {
    test('debe demostrar el mensaje Hola, soy Goku', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
        //wrapper.getByText()
        expect(getByText(saludo)).toBeInTheDocument();
    });
    
})
