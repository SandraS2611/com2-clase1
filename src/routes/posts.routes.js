import { Router } from "express"
import { ctrlCreatePosts, ctrlGetAllPosts } from "../controllers/post-controllers.js";
import { handlerException } from "../middleware/handler-error.js";

const postRouter = Router()

postRouter.get("/", ctrlGetAllPosts, handlerException)
postRouter.post("/", ctrlCreatePosts);

export { postRouter }