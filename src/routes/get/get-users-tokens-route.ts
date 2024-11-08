import { Router } from "express";
import getUsersTokensController from "../../controllers/get/get-users-tokens-controller";

const getUsersTokensRouter = Router()
getUsersTokensRouter.get("/", getUsersTokensController)
export default getUsersTokensRouter