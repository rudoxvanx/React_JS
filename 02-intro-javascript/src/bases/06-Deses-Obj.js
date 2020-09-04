/*
  DESTRUCTURACION
  ASIGNACIÓN DESTRUCTURANTE 
*/

const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    //rango:'soldado'
};

/*Obtener del objeto solo la información que nos interesa*/

const {edad,nombre,clave} = persona;

//Renombrar el la propiedad nombre a nombre2
const {nombre:nombre2} = persona;

console.log(nombre2);
/*console.log(persona.edad);
console.log(persona.clave);*/

console.log(nombre);
console.log(edad);
console.log(clave);



const useContext = ({nombre,edad,clave,rango = 'Capitán'}) => {
    //console.log(nombre,edad,rango);

    return {
        nombreClave:clave,
        anios:edad,
        latilng:{
            lat:14.1232,
            lng:-12.3232
        }
    }

}

const {nombreClave,anios,latilng:{lat,lng}} = useContext(persona);

console.log(nombre,anios);
console.log(lat,lng);