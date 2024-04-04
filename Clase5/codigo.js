/* DESTRUCTURING ARRAY*/
//                  0        1         2
let seleccion = ["Messi","De Paul","Banini"];

//accedemos

console.log(seleccion[2]);

/*copiar un dato sin destructuring*/

/*let estefania= seleccion[2]
console.log(estefania)
/*
//POPEYE
/*copiar un dato con destructuring*/
//    0     1        2  
let [leo,rodrigo,estefania]= seleccion
console.log(leo);
console.log(rodrigo);
console.log(estefania);
console.log(seleccion);

/* DESTRUCTURING OBJETOS*/
let auto={
   marca: "Ssanyoung",
   modelo: "Musso",
   anio: 2000,
};
/*copiar un dato sin destructuring*/
let miModelo= auto.modelo
console.log(miModelo)

/*copiar un dato con destructuring*/
let {marca:miMarca,modelo,anio} = auto
console.log(miMarca)
console.log(modelo)
console.log(anio)

console.log(`Hola mi modelo de auto es : ${modelo}`);
/* Tanto ARRAYS como OBJETOS no se modifican, sino que copio si info en nuevas variables*/

/*SPREAD OPERATOR*/

let rocky = [ "Rocky", "Rocky II", "RockyII"];
let creed = ["creed","Creed II"]

let peliculasBox = [...creed,...rocky,"Creed III la venganza de Nasty"];
console.log(peliculasBox)

/* OBJETOS*/

let generoAventura={
    nombreGenero: "Aventura",
    popularidad: 10,
};
let volverAlFuturo = {
    titulo: "Volver al futuro",
    ranking: 1,
    ...generoAventura
};
let volverAlFuturoDos= {
    ...volverAlFuturo,
    anio:1985
}
console.log(volverAlFuturoDos)
