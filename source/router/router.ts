import {Router} from "express"
import {index} from '../controllers/index'
import {Testing} from "../controllers/TestData"
const router = Router();
//Rutas del servidor
router.get("/", index.index);
router.post("/login",index.login);
router.get("/test/post",Testing.post)

//Lo preparamos para enviar al servidor
export default router