import '@testing-library/jest-dom';
import { getHeroeById,getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Heroes',() => {
    test('Debe de retornar un heroe por ahi',() => {
        const id = 1;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        const heroeData = heroes.find(h => h.id===id);

        expect(heroe).toEqual(heroeData);

    })

    test('Debe de retornar undefined si heroe no existe',() => {
        const id = 10;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        //const heroeData = heroes.find(h => h.id===id);

        expect(heroe).toBe(undefined);

    })

    /*Debe de retornar un arreglo con los heroes de DC 
      owner 
      toEqual al arreglo filtrado  
    */

   test('Debe de retornar un arreglo con los heroes de DC',() => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter(h => h.owner === owner);

    expect(heroes).toEqual(heroesData);
   })

   test('Debe de retornar un arreglo con los heroes de Marvel',() => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
    
        expect(heroes.length).toBe(2);

    });
})
