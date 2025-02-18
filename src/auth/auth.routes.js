import { Router } from "express"
import { registerTeacher, registerStudent, login } from "./auth.controller.js"
import { registerValidatorStudent, registerValidatorTeacher , loginValidator,  } from "../middlewares/validator.js"
import { uploadProfilePicture } from '../middlewares/multer-upload.js'
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js"

const router = Router()

router.post(
    '/login/',
    loginValidator,
    deleteFileOnError,
    login
)

router.post(
    '/register/teacher',
    uploadProfilePicture.single("profilePicture"),
    registerValidatorTeacher,
    deleteFileOnError,
    registerTeacher
)

router.post(
    '/register/student',
    uploadProfilePicture.single("profilePicture"),
    registerValidatorStudent,
    deleteFileOnError,
    registerStudent
)

export default router