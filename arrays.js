// 1. Obtener el primer elemento del array
// Enunciado: Dado un array, retorna el primer elemento del mismo.

let colores = ["rojo", "verde", "azul"];

    color= colores[0];
    console.log(color);

// Enunciado: Dado un array, retorna el último elemento del mismo.
// 2. Obtener el último elemento del array

let animales = ["perro", "gato", "conejo"];

    animal= animales[2];
    console.log(animal);

// Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.
// 3. Agregar un elemento al inicio del array

let frutas = ["naranja", "plátano"];

    frutas.unshift("manzana");
    console.log(frutas);

// 4. Eliminar el primer elemento del array
// Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

let flores = ["margarita", "girasol", "clavel"];

    let primero = flores.shift();

    console.log(primero); 
    console.log(flores); 

// 5. Agregar un elemento al final del array
// Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.

let verduras = ["zanahoria", "cebolla"];

    verduras.push("ajo");

    console.log(verduras);

// 6. Eliminar el último elemento del array
// Enunciado: Elimina el último elemento de un array y devuelve el array resultante.

let legumbres = ["lentejas", "alubias", "garbanzos"];

    let ultimo = legumbres.pop();

    console.log(ultimo);
    console.log(legumbres); 

// 7. Combinar dos arrays
// Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

let nombres = ["antonio", "manuel"];
let apellidos = ["garcia", "perez"];

    let mezcla = nombres.concat(apellidos);

    console.log(mezcla); 

// 8. Encontrar si un array incluye un elemento
// Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.

let arboles = ["pino", "castaño", "roble"];
 
    console.log(arboles.includes("castaño"));
    console.log(arboles.includes("abeto")); 

// 9. Buscar el índice de un elemento
// Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

let numeros = ["uno", "dos", "tres"];
 
    console.log(arboles.indexOf("pino")); 

// 10. Reemplazar un elemento en un array
// Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

let pares = ["2", "4", "6"];

    console.log((pares[0]= 8)); 
    console.log((pares));    

// 11. Sumar todos los elementos del array
// Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.

let impares = [1, 3, 5, 7];

let suma = impares.reduce(function (acumulador, num) {
    return acumulador + num;}, 0);

    console.log(suma); 

// 12. Multiplicar todos los elementos del array
// Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.

let primos = [2, 3, 5, 7];

let multiplicar = primos.map(function (nro) {
    return nro * 2;});

    console.log(multiplicar);

// 13. Filtrar números mayores a un valor
// Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

let nprimos = [2, 3, 5, 7];

    let par = nprimos.filter(function (nro) {
    return nro % 2 === 0;});

    console.log(pares);

// 14. Verificar si todos los elementos son mayores a un número
// Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.



// 15. Obtener el primer elemento que cumple una condición
// Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

let npares = [4, 8, 10, 12];

    let encontrado = npares.find(function (nro) {
    return nro > 10;});

    console.log(encontrado); // Imprime: 16

// 16. Imprimir cada elemento del array
// Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

    let enteros = [1, 2, 3, 4, 5];

    enteros.forEach(function (nro) {
    console.log(nro * 2);});

// 17. Crear un array con el doble de cada número
// Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

    let primos = [2, 3, 5, 7];

    let duplicar = primos.map(function (nro) {
    return nro * 2;});

    console.log(duplicar);

// 18. Convertir un array de nombres en mayúsculas
// Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.
