import express from "express";
import { controllerWrapper, validation, authenticate } from '../../middlewares/index.mjs'
import { joiUserSchema } from "../../models/index.mjs";
import {signup, login, logout} from '../../controllers/auth/index.mjs'


const authRouter = express.Router();

authRouter.post("/signup", validation(joiUserSchema), controllerWrapper(signup));
authRouter.post("/login", validation(joiUserSchema), controllerWrapper(login));
authRouter.post("/logout", authenticate, controllerWrapper(logout));

export default authRouter