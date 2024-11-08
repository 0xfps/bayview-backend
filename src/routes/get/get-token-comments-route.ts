import { Router } from "express";
import getTokenCommentsController from "../../controllers/get/get-token-comments-controller";

const getTokenCommentsRouter = Router()
getTokenCommentsRouter.get("/", getTokenCommentsController)
export default getTokenCommentsRouter