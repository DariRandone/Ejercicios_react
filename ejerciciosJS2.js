

const obtenerMayor=(x, y) => parseInt(x) > parseInt(y) ?  x : parseInt(x)<parseInt(y) ? y : x 

document.writeln(obtenerMayor(0,2))
document.writeln(obtenerMayor(0,2))


// "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
/* Metodos de MAth */



const mayoriaDeEdad=(edad)=> parseInt(edad)>= 18 ? "Allowed":"Not Allowed"
document.writeln(mayoriaDeEdad(19))
  
/*  
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

}
  */
const conection=(status)=> status===1 ? "Online": status===2 ? "Away":"Offline"
document.writeln(conection(2))  
  /*
  
  
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

}
*/
const saludo=(idioma)=> idioma ==="aleman" ? "Guten Tag!": idioma==="mandarin" ? "Ni Hao!": idioma==="ingles" ? "Hello!": "Hola!"
document.writeln(saludo("aleman"))


  /*
  
  
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es //` devuelve "Hola!"//
  // Tu código:
*/


const  colors=(color)=> color=== "blue" ? "This is blue" : color === "red" ? "This is red": color=== "green" ? "This is green": color=== "orange" ? "This is orange":"Color not found"
document.writeln(colors("green")/n)

  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.




const esDiezOCinco=(numero)=> (numero ==10 || numero ==5 )? true:false
document.writeln(esDiezOCinco(10))
 /* // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

}
*/
 const estaEnRango = (numero) => numero > 20 && numero<50 ? true:false
 document.writeln(estaEnRango(49)) 
 
 // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:



const esEntero = (numero)=> Math.floor(numero)- (numero)==0 ? true:false 
document.writeln(esEntero(9.0009))
 // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:



const fizzBuzz=(numero)=>numero % 15==0 ? "fizzbuzz": numero % 3==0 ? "fizz":numero % 5==0 ? "buzz":numero
document.writeln(fizzBuzz(165))
  /* // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

}

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí

}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

}
*/
