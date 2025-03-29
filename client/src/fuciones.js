const nombre = document.querySelector("#nombre")
const correo= document.querySelector("#correo")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit",validarCampos)

function validarCampos(e){
   if(nombre.value.trim() == "" || correo.value.trim() == "" || mensaje.value.trim() == ""){
     e.preventDefault()
      crearAlerta("todos los campos son obligatorios","error")
      return
   }

   if(!validarEmail(correo.value)){
    e.preventDefault()
     crearAlerta("el email no es valido", "error")
     return
   }

   crearAlerta("mensaje enviado correctamente")
}

function validarEmail(email){
  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let resultado = regex.test(email)
  return resultado
}

function crearAlerta(mensaje,tipo) {
    const div = document.createElement("div")
   const existe = document.querySelector(".error")
    if(!existe){
        
      if(tipo == "error"){
        div.classList.add("error")
      }else{
        div.classList.add("sucess")
      }

      div.textContent = mensaje

      formulario.appendChild(div)
    }

    setTimeout(() => {
        div.remove()
    },2000);
    
}


