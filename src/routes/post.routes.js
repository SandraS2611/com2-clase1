import { Router } from "express"
import { ctrlCreatePost, ctrlGetAllPosts } from "../../controllers/post.controllers.js";
import { handlerException } from "../SRC/controllers/middlewares/handler-exception.js";

const postRouter = Router()

postRouter.get("/", ctrlGetAllPosts, handlerException);
postRouter.post("/", ctrlCreatePost);


export { postRouter }