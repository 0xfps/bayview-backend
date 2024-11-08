import { Router } from "express";
import createTokenController from "../../controllers/post/create-token-controller";

const createTokenRouter = Router()
createTokenRouter.post("/", createTokenController)
export default createTokenRouter