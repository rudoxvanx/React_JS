import '@testing-library/jest-dom';
import { retornaArreglo,useState } from '../../base/07-deses-arr';


describe('Pruebas en 07-des-arr',() =>{
    test('retornaArreglo deberia retornar un arreglo con string y numero', () => {
        
        const [letras,numeros] = retornaArreglo();
        
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

        /*const arr = retornaArreglo();
        expect(arr).toEqual(['ABC',123]);*/

    });

    test('retorna un arreglo del tipo useState ', () => {
        
        const [valor,setState] = useState('Rudolf');
        

        console.log(typeof valor);
        console.log(typeof setState);

        expect(typeof valor).toBe('string');
        expect(typeof setState).toBe('function');


      
    })
    

    

})