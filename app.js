import express from "express"

const app = express()


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/', (req, res) => {
    res.send("Hello World from POST")
})


app.listen(3000)
console.log("Server listening on port 3000");


// 127.0.0.1:3000  ===  localhost:3000
// http://localhost:3000/
