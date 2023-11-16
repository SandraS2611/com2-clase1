const http = require("node:http")

const servidor = http.createServer((req, res) => {
res.end("Hola desde mi servidor http")
})

servidor.listen(3000)
console.log("Server listening on Port 3000");