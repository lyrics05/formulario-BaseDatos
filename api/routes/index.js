import express from "express"
import { crearMensaje } from "../controllers/PostController.js"
import { getMensajes } from "../controllers/getControllers.js"

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("base de datos funcionando")
})

router.post("/",crearMensaje)

router.get("/mensajes",getMensajes)

export default router