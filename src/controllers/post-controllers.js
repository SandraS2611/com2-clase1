import { posts } from "../models/post-model.js"
import { validationResult } from "express-validator";

export const ctrlGetAllPosts = (req, res, ) => {
  
  res.json(posts)
};

export const ctrlCreatePosts = (req, res, next) => {

  const errors = validationResult(req)

  if (errors) {
    return res.status(400).json(errors)
  }

const { title, desc, image } = req.body

   const newPost = { title, desc, image };

   posts.push(newPost)

  res.sendStatus(201);
};