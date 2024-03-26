
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(21%5)


/*function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Cadena de texto")); 
*/
let  devolverString= str= str => str
console.log(devolverString("Cadena de texto")); 




let suma = (x, y) => x+y
console.log(suma(10,10));

/*
function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y-x

console.log(resta(3,5))
*/
let resta = (x, y) => x - y ;console.log (resta (10,5));

/*

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return y*x
}
console.log(multiplica(3,5))

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
return x/y
}
console.log(divide(9,3))
let divide=(x)
*/


/*const para funciones flecha*/
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  let resultado;
  if (x === y) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(sonIguales(5,5))
const sonIguales2 = (x,y) => x=== y ;console.log(sonIguales2(10,11)); 
 

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let resultado;
  if (str1.length == str2.length) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(tienenMismaLongitud("ss","55"))


const tienenMismaLongitud2 =(str1,str2)=>{
return str1.length === str2.length
}
console.log(tienenMismaLongitud2("12334","doce"))



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let resultado;
  if (num < 90 ) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(menosQueNoventa(89))



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let resultado;
  if (num > 50 ) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(mayorQueCincuenta(40))



function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
return x%y
}
console.log(obtenerResto(25,7))

const esPar = num => num % 2===0; console.log(esPar(5)); 

  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  /* let resultado;
  if (num % 2==0 ) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(esPar(45))
*/
  

const esImpar = num => num % 2===0; console.log(esImpar(5)); 
/*

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
 let resultado;
  if (num % 2==!0 ) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(esImpar(42134))


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return (num ** 2);
}
console.log(elevarAlCuadrado(5))
*/
const elevarAlCuadrado= num=> num *num;console.log (elevarAlCuadrado(4))
const elevarAlCuadradoMath= num=> Math.pow(num,2);console.log (elevarAlCuadradoMath(4))

/*

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
   return (Math.pow(num,3) );
}
console.log(elevarAlCubo(5))
*/
const elevarAlCuboMath= num=> Math.pow(num,3);console.log (elevarAlCuboMath(4))

/*

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  return (Math.pow(num,exponent) );
}
console.log(elevar(5,3))
*/
const elevarMath= num=> Math.pow(num,4);console.log (elevarMath(4))
/*
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

return(Math.round(num))
}
console.log(redondearNumero(20.8))

*/
const redondearNumero = num=> Math.round(num);console.log (Math.round(4.3))

/*

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return(Math.ceil(num))
}
console.log(redondearHaciaArriba(8.3))
*/
const redondearHaciaArriba = num=> Math.ceil(num);console.log (Math.ceil(4.9))

/*


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
    return Math.random() 
  }
  
  
console.log(numeroRandom())

*/
const numeroRandom = num=> Math.random();console.log (Math.random())

/*

function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let resultado;
  if (num > 0 ) {
    resultado = "Es positivo";
  } else {
    if (num < 0 ) {
      resultado = "Es negativo";
    } else{
      resultado = false;
  }}
  return resultado;
}
console.log(esPositivo(0))





function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
   str = str + "!"
  return str 
}


console.log(agregarSimboloExclamacion("Hello World"))


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  let nombreyapellido=nombre + " " + apellido
return nombreyapellido
}
console.log(combinarNombres("Dario","Randone"))

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo="Hola " + nombre
  return saludo

}
console.log(obtenerSaludo("Martín"))

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  let area=alto * ancho
return area
}
console.log(obtenerAreaRectangulo(2,2))
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let perimetro=lado * 4
  return perimetro

}
console.log(retornarPerimetro(2))


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
let area=base * altura
return area

}
console.log(areaDelTriangulo(4,5))

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
let dolares = (parseFloat(euro) / 1.2)
return (dolares)
}
console.log(deEuroAdolar(50))


/*

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí


}
*/