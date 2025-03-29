import express from "express"
import db from "./config/db.js"
import cors from "cors"
import router from "./routes/index.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use("/",router)


const port = process.env.PORT || 4000

app.listen(port,()=>{
   console.log(`escuchando en el puerto ${port}`)
})

db.authenticate()
.then(()=>{
    console.log("base de datos conectada")
    db.sync()
}).catch(error =>{
    console.log(error)
})