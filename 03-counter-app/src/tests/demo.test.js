
//describe agrupador general
describe('Pruebas en el archivo demo.test.js',() => {

    test('deben ser iguales los strings',() => {
        //1 Inicialización
        const mensaje = 'Hola mundo';
    
        // 2 Estimulo
        const mensaje2 = 'Hola mundo';
    
        // 3 Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    
        /*¿PORQUE OMITIMOS EL USO DE UN IF/ELSE?
            --Porque existen métodos ya definidos en la herramienta jest que 
              no ayuda a comprobar nuestras pruebas.
        */
        /*const isActive = false;
        if(!isActive){
            throw new Error('No esta activo');
        }*/
    });
})





/*
    Comando para correr pruebas npm run test. Este comando
    corre todas los archivos del tipo prueba. Se tiene que
    hacer otra configuración para ejecutar la prueba sobre un
    solo archivo.
*/