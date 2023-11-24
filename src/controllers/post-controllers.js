import { postModel } from "../models/post-model.js"


export const ctrlGetAllPosts = (req, res, ) => {
  const posts = postModel.findAll()

  res.json(posts)
};


export const ctrlCreatePosts = (req, res, next) => {
const { title, desc, image } = req.body

   postModel.create({ title, desc, image });

  res.sendStatus(201);
};


export const ctrlGetPostById = (req, res) => { //TODO PARA BUSCAR POR ID

const { postId } = req.params

const post = postModel.findOne({ id: postId })

if (!post) {

  return res.sendStatus(404)
}
res.status(200).json(post)
}


export const ctrlUpdatePost = (req, res) => { //todo PARA BUSCAR POR ID Y ACTUALIZAR
  const { postId } = req.params

const { title, desc, image } = req.body

const updatedPost = postModel.update(postId, { title, desc, image })


if (!updatedPost) return res.sendStatus(404)

res.sendStatus(200)
}