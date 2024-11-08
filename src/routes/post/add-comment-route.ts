import { Router } from "express";
import addCommentController from "../../controllers/post/add-comment-controller";

const addCommentRouter = Router()
addCommentRouter.post("/", addCommentController)
export default addCommentRouter