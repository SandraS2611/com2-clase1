import { param } from "express-validator";

export const findPostsValidation = [param("postId").isNumeric().toInt()];
