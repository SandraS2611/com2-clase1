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


export const ctrlGetPostById = (req, res) => {
const { postId } = req.params
const post = postModel.findOne({ id: postId })
if (!post) {
  return res.sendStatus(404)
}
res.json(post)
}