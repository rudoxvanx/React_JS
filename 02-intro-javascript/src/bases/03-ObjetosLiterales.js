/*OBJETOS LITERALES*/

const persona = {
    nombre:'Rodo',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York'
    }
};

//Imprimira un objeto. El prototype es como el adn de nuestro objeto
console.log({
    /*Si nosotros tenemos el nombre de la propiedad 
      igual al nombre del valor se puede omitir un nombre
    */
    persona:persona
});


//Mutación no acceptada
//const persona2 = persona;

//const persona2 = {nombre:'peter'};

//Clon de un objeto mediante el operador spread operator
const persona2 = {...persona};

persona2.nombre ='Peter';
console.log(persona2)

