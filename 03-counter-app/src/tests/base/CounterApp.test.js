import React from 'react';
import PrimeraApp from '../../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../../CounterApp';

describe('Pruebas en <CounterApp/>',()=>{
    //const wrapper = shallow(<CounterApp /> );
    //let wrapper; //undefined
    let wrapper=shallow(<CounterApp/>); 
    
    

    
    beforeEach(()=>{
        console.log('before each');

        //No es correcto dejarlo de esta manera ya que es una 
        //variable de scope
         wrapper = shallow(<CounterApp /> );
    });

    test('Debe mostrar el componente CounterApp ', () => {
        const valueTest = 10;
       
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el componente CounterApp ', () => {
        const val = 10;
        const wrapper = shallow(<CounterApp value={val} /> );
        const counterText = wrapper.find('h2').text().trim();
        console.log(typeof val);
        console.log(typeof `${val}`);
        expect(counterText).toBe(`${val}`);



    });

    test('Debe de incrementar con el boton +1  ', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11')
    });
    
    test('Debe de incrementar con el boton -1  ', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('9')
    });
    

})