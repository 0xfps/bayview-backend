import { Router } from "express"
import getUserController from "../../controllers/get/get-user-controller"

const getUserRouter = Router()
getUserRouter.get("/:address", getUserController)
export default getUserRouter