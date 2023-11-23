import { Router } from "express";
import {
  ctrlCreatePosts,
  ctrlGetAllPosts,
} from "../controllers/post-controllers.js";
import { handlerException } from "../middleware/handler-error.js";
import { createPostsValidation } from "../../validations/create-post-validations.js";

const postRouter = Router();

postRouter.get("/", ctrlGetAllPosts, handlerException);

postRouter.post("/", createPostsValidation, ctrlCreatePosts);

export { postRouter };
