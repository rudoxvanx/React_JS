import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async',(done) => {
        const id = 1;

        /*Las pruebas son ejecutadas de manera secuencial no de manera asincrona
        El callback done nos ayuda a esperar que el proceso de la tarea asincrona termine*/
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('debe de obtener un error si el héroe por id no existe ', (done) => {
        
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })

    });
    
})
