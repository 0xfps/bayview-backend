import { Router } from "express";
import getAllTokensController from "../../controllers/get/get-all-tokens-controller";

const getAllTokensRouter = Router()
getAllTokensRouter.get("/", getAllTokensController)
export default getAllTokensRouter