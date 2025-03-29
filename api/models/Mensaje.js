import { DataTypes } from "sequelize";
import db from "../config/db.js"

const Mensajes = db.define("mensajes",{
    nombre:{
        type:DataTypes.STRING
    },
    correo:{
        type:DataTypes.STRING
    },
    mensaje:{
        type:DataTypes.STRING
    }
})

export default Mensajes