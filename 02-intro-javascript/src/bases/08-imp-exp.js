/*IMPORT / EXPORT*/

//Exportacion por defecto y exportación individual
import heroes,{owners} from '../data/heroes';

const getHeroeById = (id) => { (heroes.find(heroe => heroe.id === id));}
const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(owners);

/* FIND VS FILTER */

/* FILTER -- Filtra un conjunto de datos
   FIND -- Encuentra la primer coincidencia de 
           un elemento
*/
console.log(getHeroeByOwner('DC'));


