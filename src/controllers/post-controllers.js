import { posts } from "../models/post-model.js"

export const ctrlGetAllPosts = (req, res, next) => {
  try {
    //!se debe hacer en todos los controladores

    //throw new Error(""); //FORZAMOS UN ERROR PARA PROBAR

    if (posts.length < 1) {
      return res.sendStatus(204);
    }

    res.status(200).json(posts);
  } catch (error) {
    next("No hay posts");
  }
};

export const ctrlCreatePosts = (req, res, next) => {

const { title, desc, image } = req.body

   const newPost = { title, desc, image };

   posts.push(newPost)

  res.sendStatus(201);
};