import {Router} from "express"
import {index} from '../controllers/index'
import {Testing} from "../controllers/TestData"
const router = Router();
router.get("/", index.index)
router.get("/test/post",Testing.post)
export default router