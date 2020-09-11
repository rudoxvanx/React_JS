import React from 'react';
import PrimeraApp from '../../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../../CounterApp';

describe('Pruebas en <CounterApp/>',()=>{
    test('Debe mostrar el componente CounterApp ', () => {
        const valueTest = 10;
        const wrapper = shallow(<CounterApp /> )
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
    
    

})