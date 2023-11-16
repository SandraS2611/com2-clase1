const miPromesa = new Promise((res, rej) => {
    setTimeout(()=> {
      rej("hubo un error, no me devolvió la plata")
      //res("me devolvió la plata.")
   }, 200)
   })

//    const info = await miPromesa
//    console.log(info);

//    //FUNCION ASINCRONA
//    async function getInfo(){
//     const info = await miPromesa
//     console.log(info);
//    }
//    getInfo()// da con el res (con rej da error)
   
   
   //PARA EL REJ usar try catch
   async function getInfo(){
    try {
        const info = await miPromesa
    console.log(info);
   } catch(error) {
    console.log(error);
   } finally {
    console.log("si o si");
   }
   }
   getInfo()//atrapo el error


   //FUNCION ASINCRONA TIPO FLECHA
   const getInfo2 = async () => {

   }