import { body } from "express-validator";

export const createPostsValidation = [
    body("title")
      .notEmpty()
      .withMessage("El título es requerido.")
      .isString()
      .withMessage("El título debe ser un string."),
    body("desc").notEmpty().withMessage("El título es requerido.")
    .isString()
    .withMessage("El título debe ser un string."),
    body("image").notEmpty().isURL(),
    // body("email").notEmpty().isEmail(),
    // body("password").notEmpty().isStrongPassword({
    //     minLength
    // })
  ];