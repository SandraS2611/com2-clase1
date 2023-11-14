//var

//let

let hola = "hola";

function sayHello() {
  let chau = "chau";

  console.log(hola, chau);
}

//const = no pude ser reasignado

//string
// console.log("hola mundo".concat(" sandra"))
// console.log("chau mundo" + ", holis");
// console.log("Lohanita la Huerfanita");

const holis = "hola mundo";
const chauis = ", chau mundo";

console.log(holis + chauis);

function sayHolis() {
  return "12345";
}

console.log(`Lohanita la Jodidita ${holis}${chauis} ${sayHolis()} ${10 + 10}`);

console.log(`hola
Lohana 
la 
chiquita
hemocha`);

const div = document.querySelector("h2");

div.innerHTML = `<h3>${sayHolis()}</h3>`;

//destructuración de objetos

//Objeto
const persona = {
  nombre: "Lohana",
  apellido: "Corbalan",
  edad: 7,
  dni: 55000000,
};

// console.log(`Hola!, me llamo: ${persona.nombre} ${persona.apellido} , tengo ${persona.edad} años de edad y mi dni es: ${persona.dni}`); ==> FORMA LARGA

// const nombre = persona.nombre
// const apellido = persona.apellido
// const edad = persona.edad
// const dni = persona.dni

const { apellido, dni, ...rest } = persona; // el codigo anterior desestructurado no importa el orden

//console.log(rest);

//console.log(  `Hola!, me llamo: ${nombre} ${apellido} , tengo ${edad} años de edad y mi dni es: ${dni}`);

//Arrays si importa el orden

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const [Lunes, Martes, Miércoles, ...restoperator] = days;

console.log(Lunes, Martes, Miércoles, restoperator);

//REST OPERATOR

const [diaLunes, diaMartes, diaMiercoles, ...resto] = days;

//SPREAD OPERATOR

const alumnosTramo1 = ["Cesar", "Jonux", "Gabriela"];

const alumnosTramo2 = [
  "Federico",
  "Bruno",
  "Antonio",
  ...alumnosTramo1,
  "Bruno", // no reeemplaza se repite
];

console.log(alumnosTramo2);

const alumno = {
  nombre: "Gabriel",
  apellido: "Linares",
  edad: 20,
};

const alumnoWithEmail = {
  email: "ejemplo@gmail.com",
  edad: 21, // en un array no se sobreescribe
  ...alumno, //<--- el orden es importante a la hora de reemplazar las propiedades.
};

//console.log(alumnoWithEmail);

//MANIPULACIÓN DE ARREGLOS (arrays)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(numeros.length);
//FILTER
const pares = numeros.filter(e => !(e % 2))
const impares = numeros.filter(e => e % 2)

console.log(pares);
console.log(impares);


//MAP
const doble = numeros.map((num) => num * 2)

console.log(doble);

//FOR EACH

numeros.forEach((num) => {
  // console.log(num);
})

const miNumero = 10

const existe = numeros.find((num) => num === miNumero) 
console.log(existe);

// const pares = [];
// const impares = [];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2) {
//     //console.log("Soy impar", numeros[i]);
//     impares.push(numeros[i]);
//   } else {
//     // console.log("Soy par", numeros[i]);
//     pares.push(numeros[i]);
//   }
// }

//console.log({ pares });
//console.log({ impares });
