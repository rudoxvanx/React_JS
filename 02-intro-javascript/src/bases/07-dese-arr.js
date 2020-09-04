/*DESTRUCTURACION DE ARREGLOS*/

const personajes = ['Goku','Vegeta','Trunks'];
const [ , ,p3 ] = personajes;
//Sobre la variable presionar f2 para cambiar el nombre
//de todas la coincidencias

console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

const useState = (valor) => {
    return [valor,()=>{console.log('Hola mundo')}]
}

const [nombre,setNombre] = useState('Goku');
console.log(nombre);
setNombre();

//arr[1]();