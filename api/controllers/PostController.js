import Mensajes from "../models/Mensaje.js"

export async function crearMensaje(req,res){
   const {nombre,correo,mensaje} = req.body
    
   await Mensajes.create({
    nombre,
    correo,
    mensaje
   })

    setTimeout(() => {
        res.redirect("https://formulario-basedatos.onrender.com/mensajes.html")
    },2000);
}