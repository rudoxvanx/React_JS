/*  PROMESAS 
    No permite llevar acabo una tarea y posteriormente
    notificar el termino de la misma.
*/


/*La naturaleza de las promesas es que son asincronas,
  primero se va ejecutar todo lo que es sincrono o secuencial
  
  Se maneja la pila de tareas de javascript que nos apila 
  el código secuencial.
*/

import {getHeroeById,getHeroeByOwner} from './bases/08-imp-exp'

/*const promesa = new Promise( (resolve,reject) => {
    setTimeout( () => {
        //console.log('2 segundos después');
        const heroe = getHeroeById(2);
        //console.log(heroe);
        //resolve(heroe);
        reject('No se pudo encontrar el héroe');
    }, 2000 );

});

promesa.then((heroe)=> {
    console.log('heroe',heroe);
})
.catch(err => console.warn(err))*/

const getHeroeByIdAsync =(id) => {
    const promesa = new Promise( (resolve,reject) => {
        setTimeout( () => {
            //console.log('2 segundos después');
            const heroe = getHeroeById(id);
            //console.log(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }
        }, 2000 );
    
    });

    return promesa;
    
}

getHeroeByIdAsync(11)
    //.then(heroe => console.log('Heroe',heroe))
    //.catch(err => console.warn(err))
    .then(console.log)
    .catch(console.warn)

