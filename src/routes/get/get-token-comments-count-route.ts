import { Router } from "express";
import getTokenCommentsCountController from "../../controllers/get/get-token-comments-count-controller";

const getTokenCommentsCountRouter = Router()
getTokenCommentsCountRouter.get("/:tokenAddress", getTokenCommentsCountController)
export default getTokenCommentsCountRouter