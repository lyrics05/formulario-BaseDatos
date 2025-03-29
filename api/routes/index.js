import express from "express"
import { crearMensaje } from "../controllers/PostController.js"
import { getMensajes } from "../controllers/getControllers.js"

const router = express.Router()

router.post("/",crearMensaje)

router.get("/mensajes",getMensajes)

export default router