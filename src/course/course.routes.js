import { Router } from "express";
import { check } from "express-validator";
import { saveCourse } from "./course.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check('email', 'Este no es un correo valido').not().isEmpty(),
        validarCampos
    ],
    saveCourse
)

export default router;