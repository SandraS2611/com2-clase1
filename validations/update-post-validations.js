import { body } from "express-validator";

export const updatePostsValidation = [
  body("title")
    .optional()
    .isString()
    .withMessage("El título debe ser un string."),
  body("desc")
    .optional()
    .isString()
    .withMessage("La descripción debe ser un string."),
  body("image").optional().isURL().withMessage("La imagen debe ser una url."),
];
