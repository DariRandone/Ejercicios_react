
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


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Cadena de texto")); 


let suma = (x, y) => x+y
console.log(suma(10,10));


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y-x
}
console.log(resta(3,5))

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


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  let resultado;
  if (x == y) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(sonIguales(5,5))


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
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let resultado;
  if (num % 2==0 ) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(esPar(45))

  



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


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
   return (Math.pow(num,3) );
}
console.log(elevarAlCubo(5))



function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  return (Math.pow(num,exponent) );
}
console.log(elevar(5,3))



function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

return(Math.round(num))
}
console.log(redondearNumero(20.8))



function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return(Math.ceil(num))
}
console.log(redondearHaciaArriba(8.3))


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
    return Math.random() 
  }
  
  
console.log(numeroRandom())


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

/*
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí


}
*/