// console.log("1) hola");

// setTimeout(() => {
//     console.log("2) hola");
// }, 5000)

// console.log("3) hola");
// console.log("4) hola");

const miPromesa = new Promise((res, rej) => {
 setTimeout(()=> {
   rej("hubo un error, no me devolvió la plata")
 //res("me devolvió la plata")
}, 200)
})

miPromesa
.then((info) => {
    console.log("then");
    console.log(info);
})
.catch((error) => {
    console.log("catch");
    console.log(error);
})
.finally(() => {
    console.log("si o si");
})