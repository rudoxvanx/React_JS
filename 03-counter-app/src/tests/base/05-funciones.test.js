const { getUser,getUsuarioActivo } = require("../../base/05-funciones")
import '@testing-library/jest-dom';


describe('Pruebas en 05-funciones',() =>{
    
    test('getUser debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect(user).toEqual(userTest);


    });
    
    test('getUsuarioActivo debe de retornar un objeto ', () => {
        const nombre = 'Rudolf'
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };
        
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    })
    

})