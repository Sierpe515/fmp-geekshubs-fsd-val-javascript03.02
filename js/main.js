// OBJETOS

// let Alvaro = {

//     nombre : "Alvaro",
//     edad : 29,
//     ciudad : "Almeria",
//     //objetos dentro de objetos es nombre variable : {}
//     hobbies : {
//         hobbie1 : "Videojuegos",
//         hobbie2 : "Lectura",
//         hobbie3 : "Programar"
//     }
// }

// let Paula = {

//     nombre : "Paula",
//     edad : 29,
//     ciudad: "Ontinyent",
//     hobbies : {
//         hobbie1 : "Puzzles",
//         hobbie2 : "Bailar folk",
//         hobbie3 : "Programar"
//     }
// }

// let Ruben = {
//     nombre : "Ruben",
//     edad : 41,
//     ciudad: "Vilamarxant",
//     hobbies : {
//         hobbie1 : "Tenis",
//         hobbie2 : "Trail Running",
//         hobbie3 : "Programar"
//     }
// }

// let cartelera = {
//     pelicula1 : {
//         titulo : "Lo que el viento se llevó",
//         edad: 13
//     },
//     pelicula2 : {
//         titulo : "Star Wars",
//         edad: 7
//     },
//     pelicula3 : {
//         titulo : "Pulp Fiction",
//         edad : 18
//     }
// }

// if (Alvaro.ciudad === Paula.ciudad){
//     console.log("Son vecinos.")
// } else {
//     console.log("Viven muy lejos.")
// }

// if (Ruben.edad >= cartelera.pelicula1.edad){
//     console.log("Ruben sí puede ver", cartelera.pelicula1.edad)
// }

// let resultadoTernaria = (Ruben.edad >= cartelera.pelicula1.edad)
//     ? "Ruben sí puede"
//     : "Ruben no puede";

// console.log(resultadoTernaria);

// ARRAY DE OBJETOS

// let videojuegos = [
//     {
//         titulo: "God of war",
//         plataforma: "PS2"
//     },
//     {
//         titulo: "Dark Souls",
//         plataforma: "PC"
//     },
//     {
//         titulo: "Last of US",
//         plataforma: "PS3"
//     },
//     {
//         titulo: "Quake",
//         plataforma: "PS"
//     },
//     {
//         titulo: "Sonic 2",
//         plataforma: "Megadrive"
//     },
// ];

// let juego = prompt("Dime a qué juego quieres jugar");

// for(let i = 0; i < videojuegos.length; i++){

//     if (juego === videojuegos[i].titulo){
//         console.log(`Sí lo tenemos disponible, para ${videojuegos[i].plataforma}`);
//     };
// }




// FUNCIONES

// FUNCION SUMA CLASICA

// function Suma (a,b){
//     return a + b;
// }

// FUNCION SUMA ARROW

// const Suma = (a,b) => {
//     return a + b;
// }

//FUNCION SUMA ARROW INLINE

// const Suma = (a,b) => a + b;

// FUNCION ELEVAR

// const Elevar = numero => numero**2;


// FUNCIONES ARROW QUE DEVUELVEN OBJETOS

// const Pokemon = nombrePokemon => ({nombre : nombrePokemon});

// const resultado = Pokemon("Pikachu");

// const Film = (title, year, genre) => (
//     {
//         nombrePeli: title,
//         año: year,
//         genero: genre
//     }
// );

// const resultado = Film("La vida es vella", 1997, "Drama");

// console.log(resultado)



// MAPEAR

//HACER PLURALES (AÑADIR "S")

// let animal = ["perro", "gato", "loro", "tigre", "mapache", "nutria", "serpiente"];

// let animales = animal.map(bicho => bicho + "s");

// //bicho es una variable temporal dentro de la función que sustituye a cada 
// //uno de los elementos del ARRAY

// console.log (animales)

//MULTIPLICAR X10

// let numeros = [1, 200, 7000000, 357, 0, 2000]

// let numMultip = numeros.map(multip => multip * 10);

// console.log (numMultip)

// FUNCION CON VALOR POR DEFECTO

// let calculaIVA = (precio, tasa = 0.21) => {
//     return precio + precio * tasa;
// }

// let resultado = calculaIVA(200);

// Si le pasamos un valor distinto (0,25) al valor fijo (0.21), lo utiliza en lugar del fijo

// let resultado = calculaIVA(200, 0.25);

// console.log (resultado)