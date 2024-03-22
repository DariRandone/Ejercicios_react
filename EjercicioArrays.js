/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
const clasificaciones =['Marcos', 'Franco', 'Agostina', 'Leon', 'Juan Cruz','Eduardo']
console.log(clasificaciones)


/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

function mostrarClasificacion () {
    for (i = 0; i < clasificaciones.length; i++) {
        console.log(clasificaciones[i]);
      } 

}
mostrarClasificacion()


//modo Correcto ForEach (pueod usar tambien document.write)

clasificaciones.forEach(function(numero) {
  console.log(numero);
});

clasificaciones.forEach(numero2 => console.log(numero2));


/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

let indiceagus=clasificaciones.indexOf("Agostina")
let indiceleon=clasificaciones.indexOf("Leon")
console.log(indiceagus)
console.log(indiceleon)

 console.log( clasificaciones.splice(indiceagus, 2, 'Leon'))
 console.log( clasificaciones.splice(indiceleon, 0, 'Agostina'))
 console.log(clasificaciones)



/*



/* b)Eduardo es descalificado y se elimina del concurso */
/*console.log( clasificaciones.splice(clasificaciones.indexOf("Eduardo"), 1 ))*/
console.log(clasificaciones.pop())
console.log(clasificaciones)
 

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
console.log( clasificaciones.splice(clasificaciones.indexOf("Franco"), 0,"Julieta","Martina" ))
console.log(clasificaciones)



/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
console.log(clasificaciones.unshift("Alicia"))
console.log(clasificaciones)


/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
mostrarClasificacion()gi