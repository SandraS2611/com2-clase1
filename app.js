// const express = require("express")

// const app = express()

// app.get('/',(req, res) =>{
//     res.send("hello world")
// })

// //IP local = 127.0.0.1 === localhost :3000 === Puerto


// app.listen(3000)
// console.log("Server listening on Port 3000");

import express from "express"

const app = express()

app.listen(3000)
console.log("server on port 3000");

//GET -- obtener recursos
//POST -- crear recursos
//PATCH -- editar recursos ya creados de forma parcial
//DELETE -- eliminar recursos
//PUT -- editar un recursos si existe y si no lo crea. 