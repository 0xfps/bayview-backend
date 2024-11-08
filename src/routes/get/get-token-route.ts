import { Router } from "express";
import getTokenController from "../../controllers/get/get-token-controller";

const getTokenRouter = Router()
getTokenRouter.get("/:tokenAddress", getTokenController)
export default getTokenRouter