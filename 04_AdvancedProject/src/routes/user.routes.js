import {Router} from 'express';
import {registerUser} from "../controllers/user.controller.js"
//same like the app we make from express
const router= Router()

router.route("/register").post(registerUser)

export default router;