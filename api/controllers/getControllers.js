import Mensajes from "../models/Mensaje.js"
export async function getMensajes(req,res){
   const resultado = await Mensajes.findAll({order:[["createdAt","DESC"]]})
   console.log("esto es resultado",resultado)

   res.json(resultado)
}