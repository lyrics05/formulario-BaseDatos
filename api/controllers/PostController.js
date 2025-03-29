import Mensajes from "../models/Mensaje.js"

export async function crearMensaje(req,res){
   const {nombre,correo,mensaje} = req.body
    
   await Mensajes.create({
    nombre,
    correo,
    mensaje
   })

    setTimeout(() => {
        res.redirect("http://127.0.0.1:5500/public/mensajes.html")
    },2000);
}