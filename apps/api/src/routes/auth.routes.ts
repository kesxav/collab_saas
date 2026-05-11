import express,{Router} from "express"
import signup from "../controllers/auth.controller.signup.js"
import { validator } from "../middleware/validator.js";
import { CreateUserSchema, SigninSchema } from "@repo/common/types";
import { signin } from "../controllers/auth.controller.signin.js";

const router: Router = express.Router();


router.post("/signup",validator(CreateUserSchema),signup);
router.post("/signin",validator(SigninSchema),signin)

export default router;