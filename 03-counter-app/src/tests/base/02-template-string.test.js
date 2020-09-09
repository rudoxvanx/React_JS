import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';



describe('Pruebas en 02-template-string.js',() => {
    test('getSaludo debe de retornar hola fernando!',() => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        //console.log(saludo);
        expect(saludo).toBe('Hola ' + nombre+'!');

    });

    //getSaludo debe de retornar Hola Rudolf! si no hay argumento nombre
    test('getSaludo debe de retornar hola Rudolf! si no hay argumento nombre',() => {
      
        const saludo = getSaludo();
        //console.log(saludo);
        expect(saludo).toBe('Hola ' + 'Rudolf'+'!');

    });
})