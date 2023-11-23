import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { postRouter } from "./src/routes/controllers/routes/post.routes.js";
import { validarPost } from "./middlewares/validar-create-post.js";

const app = express();

// ! MIDDLEWARE

//middlewares comunes
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

//PARA QUE FUNCIONE EL BODY
app.use(express.json());

//le indica donde estan los archivos estaticos
app.use(express.static("public"));

//PARA QUE FUNCIONEN LOS FORMULARIOS HTML
app.use(express.urlencoded({ extended: false }));

//todo VALIDACIÓN PERSONALIZADA
app.use(validarPost)

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/posts", postRouter)

app.listen(3000);
console.log("Server listening on port 3000");

//! 127.0.0.1:3000  ===  localhost:3000
//! http://localhost:3000/
