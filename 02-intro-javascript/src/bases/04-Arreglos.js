/*ARREGLOS*/
const arreglo = [1,2,3,4];
/*arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5);*/


/*let arreglo2 = arreglo;
arreglo2.push(5)*/

/*USO DEL SPREAD OPERATOR PARA EXTRAER UNO A UNO LOS ELEMENTOS DEL ARREGLO 
Y ASIGNARLOS AL AREGLO NUEVO */
let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

