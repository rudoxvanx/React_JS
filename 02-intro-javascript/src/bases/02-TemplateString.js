/*
    TEMPLATE STRING
    --Es una forma o manera de concatenar string con variables
      o resultados de operaciones
*/

const nombre = 'Rudolf';
const apellido = 'Garcia';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = 
            `Este es mi nombre completo ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){

    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Rodolfo')}`);
