import { Router } from "express";
import findTokenController from "../../controllers/get/find-token-controller";

const findTokenRouter = Router();
findTokenRouter.get("/:tokenSearchString", findTokenController);
export default findTokenRouter;
