import { Router } from "express";
import {
  ctrlCreatePosts,
  ctrlGetAllPosts,
  ctrlGetPostById,
} from "../controllers/post-controllers.js";
import { handlerException } from "../middleware/handler-error.js";
import { createPostsValidation } from "../../validations/create-post-validations.js";
import { applyValidations } from "../middleware/apply-validations.js";
import { findPostsValidation } from "../../validations/find-post-validations.js";

const postRouter = Router();

postRouter.get("/", ctrlGetAllPosts, handlerException);

postRouter.get(
  "/:postId",
  findPostsValidation,
  applyValidations,
  ctrlGetPostById
);

postRouter.post("/", createPostsValidation, applyValidations, ctrlCreatePosts);

export { postRouter };
