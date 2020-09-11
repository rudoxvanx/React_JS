import React from 'react';
import PrimeraApp from '../../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';


describe('Pruebas en <PrimeraApp/>', () => {
    /*test('debe demostrar el mensaje Hola, soy Goku', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render(<PrimeraApp saludo = {saludo} />);
        
        //wrapper.getByText()
        expect(getByText(saludo)).toBeInTheDocument();
    });
    */

    test('debe de mostrar <PrimeraApp/> correctamente ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
    
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado  por props ', () => {

        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
                        <PrimeraApp 
                            saludo={saludo}
                            subtitulo={subtitulo}/>);
        
        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    });
})
