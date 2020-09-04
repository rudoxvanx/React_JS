const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola ${nombre}`;
const saludar4 = () =>  `Hola mundo`;


//saludar = 30;
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

/*La funcion getUser retorna de manera implicita todo
lo que esta dentro del parentesis*/

const getUser = () => ({
        uid:'ABC123',
        username:'El rudo'
    });

console.log(getUser());

const user = getUser();
console.log(user);

/* Tarea
    1-Transformar a una función flecha
    2-Tiene que retornar un objeto implicito
    3-Pruebar
*/

function getUsuarioActivo(nombre){
    return {
        uid:'ABC567',
        username:nombre
    }
};

const usuarioActivo = getUsuarioActivo('Rodolfito');
console.log(usuarioActivo);

const usuarioActivo2 = (nombre) => ({uid:'ABC567',username:nombre})

console.log(usuarioActivo2('Rodox'));
