const contenido = document.querySelector(".contenedorMensaje")

document.addEventListener("DOMContentLoaded",function(){
    getMensajes()
})

async function getMensajes(){
   const respuesta = await fetch("https://formulario-basedatos.onrender.com/mensajes.html")
   const resultado = await respuesta.json()
   console.log(resultado)
   mostrarMensajes(resultado)
}

function mostrarMensajes(array){
    array.forEach(mensaje => {
           const div = document.createElement("div")
           div.classList.add("contenido")
           const pIcono = document.createElement("P")
           pIcono.textContent = "👌😁"
           const pNombre = document.createElement("p")
           pNombre.textContent = mensaje.nombre
           const pCorreo = document.createElement("p")
           pCorreo.textContent = mensaje.correo
           const pMensaje = document.createElement("p")
           pMensaje.textContent = mensaje.mensaje

          
           div.appendChild(pNombre)
           div.appendChild(pCorreo)
           div.appendChild(pMensaje)
           div.appendChild(pIcono)

           contenido.appendChild(div)
    });
}


